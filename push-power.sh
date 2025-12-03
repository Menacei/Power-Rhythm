#!/data/data/com.termux/files/usr/bin/bash
# === Power-Rhythm Auto Git Push & Build ===

# Auto-detect repository name and directory
PROJECT_DIR="$HOME/power-and-rhythm"
REPO_OWNER="menacei"
REPO_NAME=$(basename "$(git -C $PROJECT_DIR rev-parse --show-toplevel 2>/dev/null)" | tr '[:upper:]' '[:lower:]' | tr '_' '-')
REPO_SSH="git@github.com:${REPO_OWNER}/${REPO_NAME^}.git"
API_URL="https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME^}/actions/runs"
DOWNLOAD_DIR="/storage/emulated/0/Download"

echo "🚀 Starting Power-Rhythm Auto Sync Script for ${REPO_NAME^}..."

cd "$PROJECT_DIR" || exit 1

# 1️⃣ Fix Git remote URL automatically if wrong
CURRENT_REMOTE=$(git remote get-url origin 2>/dev/null)
if [ "$CURRENT_REMOTE" != "$REPO_SSH" ]; then
  echo "🔧 Fixing remote URL..."
  git remote set-url origin "$REPO_SSH"
fi

# 2️⃣ Verify SSH connection
ssh -T git@github.com >/dev/null 2>&1
if [ $? -ne 1 ]; then
  echo "❌ SSH key not detected or not added to GitHub!"
  echo "👉 Run: cat ~/.ssh/id_ed25519.pub and add it to GitHub > Settings > SSH Keys"
  exit 1
fi

# 3️⃣ Add & commit changes
git add -A
git commit -m "🚀 Auto sync from Termux" || echo "No changes to commit."

# 4️⃣ Push to GitHub
echo "📤 Pushing code to GitHub..."
git push origin main || { echo "❌ Push failed. Check SSH or repo name."; exit 1; }

# 5️⃣ Check latest GitHub Action run
echo "🔍 Checking GitHub Actions build status..."
RUN_ID=$(curl -s $API_URL | jq -r '.workflow_runs[0].id')
if [ -z "$RUN_ID" ] || [ "$RUN_ID" == "null" ]; then
  echo "⚠️  No workflow runs found yet. Check your Actions tab manually."
  exit 1
fi

# 6️⃣ Poll build completion
STATUS="queued"
while [[ "$STATUS" == "queued" || "$STATUS" == "in_progress" ]]; do
  echo "🛠️  Build status: $STATUS..."
  sleep 30
  STATUS=$(curl -s "$API_URL/$RUN_ID" | jq -r '.status')
done

# 7️⃣ Check build result
CONCLUSION=$(curl -s "$API_URL/$RUN_ID" | jq -r '.conclusion')
if [ "$CONCLUSION" != "success" ]; then
  echo "❌ Build failed. Check: https://github.com/${REPO_OWNER}/${REPO_NAME^}/actions"
  exit 1
fi

# 8️⃣ Fetch artifact URL
echo "📦 Build succeeded! Fetching APK..."
ARTIFACT_URL=$(curl -s "$API_URL/$RUN_ID/artifacts" | jq -r '.artifacts[0].archive_download_url')

if [ -z "$ARTIFACT_URL" ]; then
  echo "⚠️  No APK artifact found."
  exit 1
fi

# 9️⃣ Download artifact
curl -L -o "$DOWNLOAD_DIR/power-rhythm-artifact.zip" \
  -H "Authorization: token $GITHUB_PAT" \
  "$ARTIFACT_URL"

cd "$DOWNLOAD_DIR"
unzip -o power-rhythm-artifact.zip >/dev/null 2>&1
rm power-rhythm-artifact.zip

APK_FILE=$(find "$DOWNLOAD_DIR" -name "*.apk" | head -n 1)
if [ -z "$APK_FILE" ]; then
  echo "⚠️  No APK found in artifact."
  exit 1
fi

# 🔟 Notify user
termux-notification --title "Power-Rhythm Build Complete 🎯" \
  --content "APK is ready! Saved to $DOWNLOAD_DIR" \
  --priority high

echo "✅ APK downloaded successfully!"
echo "📱 File: $APK_FILE"

# 🔁 Auto install APK (optional)
termux-open "$APK_FILE"

echo "🎉 Done! Power-Rhythm build cycle complete."

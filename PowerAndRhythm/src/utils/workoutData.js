// Exercise categories
export const CATEGORIES = {
  BOXING: 'Boxing',
  KICKBOXING: 'Kickboxing',
  MUAY_THAI: 'Muay Thai',
  CALISTHENICS: 'Calisthenics',
  HIIT: 'HIIT',
  WEIGHTLIFTING: 'Weightlifting'
};

export const BODY_AREAS = {
  FULL_BODY: 'Full Body',
  UPPER_BODY: 'Upper Body',
  LOWER_BODY: 'Lower Body',
  CORE: 'Core',
  CARDIO: 'Cardio',
  ARMS: 'Arms',
  LEGS: 'Legs',
  CHEST: 'Chest',
  BACK: 'Back',
  SHOULDERS: 'Shoulders'
};

export const workoutData = [
  // Boxing Exercises (5)
  { id: 1, title: 'Boxing Fundamentals', category: CATEGORIES.BOXING, level: 'Beginner', videoId: 'dQw4w9WgXcQ', bodyArea: BODY_AREAS.UPPER_BODY, duration: 20 },
  { id: 2, title: 'Heavy Bag Training', category: CATEGORIES.BOXING, level: 'Intermediate', videoId: '3JZ_D3ELwOQ', bodyArea: BODY_AREAS.FULL_BODY, duration: 30 },
  { id: 3, title: 'Speed Bag Workout', category: CATEGORIES.BOXING, level: 'Intermediate', videoId: '2vjPBrBU-TM', bodyArea: BODY_AREAS.ARMS, duration: 15 },
  { id: 4, title: 'Boxing Combos & Footwork', category: CATEGORIES.BOXING, level: 'Advanced', videoId: 'kJQP7kiw5Fk', bodyArea: BODY_AREAS.FULL_BODY, duration: 25 },
  { id: 5, title: 'Boxing Conditioning', category: CATEGORIES.BOXING, level: 'Advanced', videoId: 'ZZ5LpwO-An4', bodyArea: BODY_AREAS.CARDIO, duration: 35 },

  // Kickboxing Exercises (4)
  { id: 6, title: 'Kickboxing Basics', category: CATEGORIES.KICKBOXING, level: 'Beginner', videoId: 'GBIIQ0kP15E', bodyArea: BODY_AREAS.FULL_BODY, duration: 20 },
  { id: 7, title: 'Power Kicks Training', category: CATEGORIES.KICKBOXING, level: 'Intermediate', videoId: 'mzSsxYvSjKU', bodyArea: BODY_AREAS.LEGS, duration: 25 },
  { id: 8, title: 'Kickboxing Cardio Blast', category: CATEGORIES.KICKBOXING, level: 'Intermediate', videoId: 'oL0OFLLyByg', bodyArea: BODY_AREAS.CARDIO, duration: 30 },
  { id: 9, title: 'Advanced Kickboxing Combos', category: CATEGORIES.KICKBOXING, level: 'Advanced', videoId: 'E_6d3JBBo4s', bodyArea: BODY_AREAS.FULL_BODY, duration: 35 },

  // Muay Thai Exercises (4)
  { id: 10, title: 'Muay Thai Fundamentals', category: CATEGORIES.MUAY_THAI, level: 'Beginner', videoId: 'CYA7HM3YGho', bodyArea: BODY_AREAS.FULL_BODY, duration: 25 },
  { id: 11, title: 'Clinch & Knee Training', category: CATEGORIES.MUAY_THAI, level: 'Intermediate', videoId: 'xW7VrJO6BPQ', bodyArea: BODY_AREAS.CORE, duration: 20 },
  { id: 12, title: 'Muay Thai Elbow Strikes', category: CATEGORIES.MUAY_THAI, level: 'Intermediate', videoId: 'lS-vazd7x-M', bodyArea: BODY_AREAS.ARMS, duration: 15 },
  { id: 13, title: 'Muay Thai Fight Conditioning', category: CATEGORIES.MUAY_THAI, level: 'Advanced', videoId: 'VaKmECQHzBQ', bodyArea: BODY_AREAS.FULL_BODY, duration: 40 },

  // Calisthenics Exercises (4)
  { id: 14, title: 'Push-Up Variations', category: CATEGORIES.CALISTHENICS, level: 'Beginner', videoId: 'IODxDxX7oi4', bodyArea: BODY_AREAS.CHEST, duration: 15 },
  { id: 15, title: 'Pull-Up Progressions', category: CATEGORIES.CALISTHENICS, level: 'Intermediate', videoId: 'eGo4IYlbE5g', bodyArea: BODY_AREAS.BACK, duration: 20 },
  { id: 16, title: 'Core Calisthenics', category: CATEGORIES.CALISTHENICS, level: 'Intermediate', videoId: 'Ep_AeSLJbLc', bodyArea: BODY_AREAS.CORE, duration: 18 },
  { id: 17, title: 'Advanced Calisthenics Routine', category: CATEGORIES.CALISTHENICS, level: 'Advanced', videoId: 'mvJHw64fxgQ', bodyArea: BODY_AREAS.FULL_BODY, duration: 30 },

  // HIIT Exercises (4)
  { id: 18, title: 'HIIT for Beginners', category: CATEGORIES.HIIT, level: 'Beginner', videoId: 'ml6cT4AZdqI', bodyArea: BODY_AREAS.FULL_BODY, duration: 20 },
  { id: 19, title: 'Tabata Training', category: CATEGORIES.HIIT, level: 'Intermediate', videoId: 'KCAMp-7_qss', bodyArea: BODY_AREAS.CARDIO, duration: 25 },
  { id: 20, title: 'HIIT Leg Burner', category: CATEGORIES.HIIT, level: 'Intermediate', videoId: '2VK-9FZTsrg', bodyArea: BODY_AREAS.LEGS, duration: 22 },
  { id: 21, title: 'Extreme HIIT Challenge', category: CATEGORIES.HIIT, level: 'Advanced', videoId: 'cZnsLVArIt8', bodyArea: BODY_AREAS.FULL_BODY, duration: 35 },

  // Weightlifting Exercises (4)
  { id: 22, title: 'Compound Lifts Basics', category: CATEGORIES.WEIGHTLIFTING, level: 'Beginner', videoId: 'EP2g3Sj3qSw', bodyArea: BODY_AREAS.FULL_BODY, duration: 30 },
  { id: 23, title: 'Upper Body Strength', category: CATEGORIES.WEIGHTLIFTING, level: 'Intermediate', videoId: 'R8xpN6Q5Gzk', bodyArea: BODY_AREAS.UPPER_BODY, duration: 35 },
  { id: 24, title: 'Leg Day Power', category: CATEGORIES.WEIGHTLIFTING, level: 'Intermediate', videoId: 'SHgQeBk7zIs', bodyArea: BODY_AREAS.LEGS, duration: 40 },
  { id: 25, title: 'Olympic Lifting Techniques', category: CATEGORIES.WEIGHTLIFTING, level: 'Advanced', videoId: 'KlXv50C1eJo', bodyArea: BODY_AREAS.FULL_BODY, duration: 45 }
];

// Get workouts by category
export const getWorkoutsByCategory = (category) => {
  return workoutData.filter(workout => workout.category === category);
};

// Get workouts by level
export const getWorkoutsByLevel = (level) => {
  return workoutData.filter(workout => workout.level === level);
};

// Get workouts by body area
export const getWorkoutsByBodyArea = (bodyArea) => {
  return workoutData.filter(workout => workout.bodyArea === bodyArea);
};

// Fitness App Analytics
class FitnessAnalytics {
  constructor(data) {
    if (!data || data.length === 0) {
      throw new Error("Dataset cannot be empty!");
    }
    this.data = data;
  }

  // 1. Active users: steps > 7000
  getActiveUsers() {
    return this.data.filter(entry => entry.steps > 7000);
  }

  // 2. Average calories burned
  getAverageCalories() {
    const totalCalories = this.data.reduce((sum, entry) => sum + entry.calories, 0);
    return totalCalories / this.data.length;
  }

  // 3. Summary messages for each user
  getUserSummary() {
    return this.data.map(entry => {
      return `${entry.user} walked ${entry.steps} steps and burned ${entry.calories} calories.`;
    });
  }
}

// Workout Data
const workoutData = [
  { user: "A", steps: 8000, calories: 300 },
  { user: "B", steps: 12000, calories: 500 },
  { user: "C", steps: 4000, calories: 200 }
];

// Running the analytics
try {
  const analytics = new FitnessAnalytics(workoutData);

  console.log("Active Users:", analytics.getActiveUsers());
  console.log("Average Calories Burned:", analytics.getAverageCalories());
  console.log("User Summary:", analytics.getUserSummary());

} catch (err) {
  console.log("Error:", err.message);
}

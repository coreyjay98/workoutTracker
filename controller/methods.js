const Workout = require('../models/schema');

module.exports = {
  getAllData: async function () {
    const result = await Workout.find();
    return result;
  },
  getDataWithDuration: async function () {
    const result = await Workout.findOne({}, {}, { sort: { day: -1 } });
    const { exercises } = result;
    if (result.totalDuration) {
      result.totalDuration = 0;
    }
    const totalDuration = exercises.reduce(
      (a, { duration }) => duration + a,
      0
    );
    result.totalDuration = totalDuration;
    result.save();
    return result;
  },
  insertWorkout: async function (body) {
    const insert = await Workout.create({
      day: Date.now(),
    });
    return insert;
  },
  updateExercise: async function (id, exercise) {
    const update = await Workout.findByIdAndUpdate(id, {
      $push: { exercises: exercise },
    });
    return update;
  },
  getDataFromWeek: async function () {
    const sevenDaysAgo = new Date(new Date().setDate(new Date().getDate() - 7));
    const result = await Workout.find({ day: { $gt: sevenDaysAgo } });
    return result;
  },
  totalDurationSeed: async function (workoutData) {
    for await (const workout of workoutData) {
      workout.totalDuration = 0;
      const { exercises } = workout;
      const totalDuration = exercises.reduce(
        (a, { duration }) => duration + a,
        0
      );
      workout.totalDuration = totalDuration;
      workout.save();
    }
  },
};

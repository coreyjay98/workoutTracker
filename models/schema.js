const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
  },
  exercises: [
    {
      type: { type: String },
      name: { type: String },
      weight: { type: Number, min: 0 },
      sets: { type: Number, min: 0 },
      reps: { type: Number, min: 0 },
      duration: { type: Number, min: 0 },
      distance: { type: Number, min: 0 },
    },
  ],
  totalDuration: { type: String, min: 0 },
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;

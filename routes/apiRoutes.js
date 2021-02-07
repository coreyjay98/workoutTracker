const express = require('express');
const app = express();
const {
  insertWorkout,
  updateExercise,
  getDataWithDuration,
  getDataFromWeek,
} = require('../controller/methods');

app.get('/workouts', async function (req, res) {
  const result = await getDataWithDuration();
  res.json(result);
});

app.post('/workouts', async function (req, res) {
  const insert = await insertWorkout();
  const result = await getDataWithDuration();
  res.json(result);
});
app.put('/workouts/:id', async function (req, res) {
  const { id } = req.params;
  const update = await updateExercise(id, req.body);
  res.send(update);
});
app.get('/workouts/range', async function (req, res) {
  const result = await getDataFromWeek();
  res.send(result);
});

module.exports = app;

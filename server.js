const express = require('express');
const ck = require('ckey');
const runFunc = require('./seeders/seed');

const app = express();

const PORT = ck.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', require('./routes/apiRoutes'));

app.use('/', require('./routes/views'));

(async () => {
  await runFunc();
  app.listen(PORT, () => {
    console.log('Server Started');
  });
})();

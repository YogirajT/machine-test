const express = require('express');
const env = require('./env');
const controllers = require('./controllers');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', controllers);

const server = app.listen(env.port, async (err) => {
    if (!err)
        console.log(`Site is live baseurl: ${env.host}:${env.port}`);
    else console.log(err)
});

process.on('SIGTERM', () => {
    server.close(() => {
      console.log('Process terminated')
    })
});

process.on('uncaughtException', function (err) {
    process.stdout.write(`Fatal:  ${err}`, () => {
        process.kill(process.pid, 'SIGTERM')
    })
});
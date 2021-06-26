const express = require('express');
const routes = require('../routes');
const router = express.Router();

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

for (let i = 0; i < routes.length; i++) {
    const { path, method, handler } = routes[i];
    router[method](path, handler);
}
  
module.exports = router;
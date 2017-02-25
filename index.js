const config = require('./config/config');
const app = require('./config/setup');
const logger = require('debug')('dev');

let port = config.server.port;

app.listen(port, () => {
    logger(`server started on port ${port}`);
});

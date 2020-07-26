
var config = require('dotenv');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const router = require('./api/server/model-routes/router');

import UserRoutes from './api/server/model-routes/UserRoutes';

config.config();

app.use(router);
app.listen(3000, function () {
  console.log('project on port 3000!');
});

var swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./api/server/endpoints/swagger.json');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
//app.use('/api/v1', router);
app.use('/api/v1/users', UserRoutes);
export default app;

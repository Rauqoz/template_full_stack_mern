// Module Express and App
const express = require('express');
const app = express();
// Module Cors
const cors = require('cors');
// Module Swagger
const swaggerIU = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
// Module FileSystem and Path
const fs = require('fs');
const path = require('path');
// Const routes for end-points
const routes = require('../routes/routes');
// Swagger Doc File
const swagger_doc = JSON.parse(fs.readFileSync(path.join(__dirname, './swagger/doc_Title.json')));
const swagger_paths = JSON.parse(fs.readFileSync(path.join(__dirname, './swagger/doc_Paths.json')));
const swagger_schemas = JSON.parse(fs.readFileSync(path.join(__dirname, './swagger/doc_Schemas.json')));
swagger_doc.definition.paths = swagger_paths;
swagger_doc.definition.components = swagger_schemas;
// Const port for Server or localhost in port 4000
const port = process.env.PORT || 4000;

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Routes
app.use('/', routes);

// Swagger Documentation
app.use('/api-doc', swaggerIU.serve, swaggerIU.setup(swaggerJsdoc(swagger_doc)));

// Const Server
const server_on = app.listen(port, (err) => {
	if (err) throw err;
	console.log(`Server on port ${port}`);
});

module.exports = server_on;


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
// defining the Express app
const app = express();
const config = require('./config')
const routes=require('./routes')

//defining the swagger docs options
const swaggerOptions={
  swaggerDefinition : {
    info:{
      title : 'Monthly Budget Application',
      version : '1.0.0'
    }
  },
  apis:['./src/routes.js'],
}
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocs));

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// defining an endpoint to return all expense items
app.use('/',routes)
// app.get('/', (req, res) => {
//   services.getExpense()
//   res.send(services.getExpense());
// });

// app.post('/', (req, res) => {
//   services.insertExpense(req.body)
//   res.send(services.getExpense());
// });


// starting the server
app.listen(3001, () => {
  config.getDatabase();
  console.log('listening on port 3001');
});
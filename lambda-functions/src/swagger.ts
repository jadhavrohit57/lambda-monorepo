import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import express from 'express';

const app = express();

// Swagger definition
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Hello World API',
    version: '1.0.0',
    description: 'API to return Hello, World or Hello, [name]',
  },
  servers: [
    {
      url: 'http://localhost:3000', // Replace with your server URL
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./src/index.ts'],
};

const swaggerSpec = swaggerJSDoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Default route
app.get('/', (req, res) => {
  res.send('Swagger API Documentation is available at /api-docs');
});

app.listen(3001, () => {
  console.log('Swagger docs available at http://localhost:3001/api-docs');
});

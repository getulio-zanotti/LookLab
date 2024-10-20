// Módulo de inicialização do servidor web onde nossa webapi estará hospedada, módulo de infraestrutura;

// Importar o arquivo app
const app = require('./app');
// Importar a porta do servidor
const port = app.get('port');

const swaggerUi = require("swagger-ui-express")
const swaggerJsDoc = require("swagger-jsdoc")

const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "LookLab API",
            version: "1.0.0",
            description: "API para o projeto profissional",
        },
        servers: [{ url: "http://localhost:3000" }],
    },
    apis: [`${__dirname}/routes/*.js`], // caminho para as rotas
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Testar API
app.listen(port, () => console.log(`Run on port ${port}!`));
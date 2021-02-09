import express from 'express';
import path from 'path';
import cors from 'cors';
import 'express-async-errors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler);



app.listen(3333);




//Rota = conjunto
//Recurso = usuario
//Metodos HTTP = GET, POST, PUT, DELETE
//Parametros


//GET = BUSCAR UMA INFORMAÇÃO (LISTA, ITEM)
//POST = CRIANDO UMA INFORMAÇÃO
//PUT = EDITANDO UMA INFORMAÇÃO
//DELETE = DELETANDO UMA INFORMAÇÃO

//Query Params: http://localhost:3333/users?search=diego
//Router Params: http://localhost:3333/users/1 (identificar um recurso) 
//Body: http://localhost:3333/users (identificar um recurso)




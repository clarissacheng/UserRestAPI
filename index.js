import express from 'express'; 
import bodyParser from 'body-parser';   //Allows us to take in post-request bodies
import usersRoutes from './routes/users.js';

const app = express(); 
const PORT = 5000;      

app.use(bodyParser.json()); //Initializes body parser in JSON formatting

app.use('/users', usersRoutes);

app.get('/', (req, res) => res.send('Hello from Homepage.')); //Get request to the  home root route

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));
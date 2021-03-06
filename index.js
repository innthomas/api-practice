import express from 'express';
//import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js'

const app = express();
const PORT = 5300;

app.use(express.json()); //Used to parse JSON bodies
//app.use(bodyParser.json());

app.use('/users',usersRoutes);

app.get('/',(req,res) => res.send("Hello from Homepage")
)

app.listen(PORT,()=>console.log(`server running on 'http://localhost:${PORT}`))
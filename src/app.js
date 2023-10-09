import express from 'express';
import route from './routes';
import cors from 'cors'

const app = express();
const port = 3000;

app.use(cors());

app.use(route);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});

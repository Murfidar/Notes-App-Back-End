import express from 'express';
import cors from 'cors';
import route from './routes';

const app = express();
const port = 3000;

app.use(cors());

app.use(route);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});

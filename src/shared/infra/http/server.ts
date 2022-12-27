import { app } from './app';

const port = process.env.API_PORT ?? 3333;

app.listen(port, () => console.log(`Server is running on port: ${port}`));

import { Router } from 'express';

const router = Router();

router.get('/', (request, response) => {
  return response.json({ Hello: 'world' });
});

export { router };

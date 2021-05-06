import { Router } from 'express';
import UserController from './app/controllers/UserController';

const routes = Router();

routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.post('/users', UserController.store);
routes.put('/users', UserController.update);
routes.delete('/users/:id', UserController.delete);

export default routes;

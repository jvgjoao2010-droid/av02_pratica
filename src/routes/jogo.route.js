import { Router } from 'express';
import { jogoController } from '../controllers/jogo.controller.js';

const jogoRouter = Router();

jogoRouter.get('/', jogoController.getAll);
jogoRouter.get('/:id', jogoController.getById);
jogoRouter.post('/', jogoController.create);
jogoRouter.put('/:id', jogoController.update);
jogoRouter.patch('/:id', jogoController.update);
jogoRouter.delete('/:id', jogoController.delete);

export default jogoRouter;

import { jogoRepository } from '../repositories/jogo.repository.js';

export const jogoService = {
  getAll() {
    return jogoRepository.getAll();
  },

  getById(id) {
    return jogoRepository.getById(id);
  },

  create(dados) {
    return jogoRepository.create(dados);
  },

  update(id, dados) {
    return jogoRepository.update(id, dados);
  },

  delete(id) {
    return jogoRepository.delete(id);
  },
};

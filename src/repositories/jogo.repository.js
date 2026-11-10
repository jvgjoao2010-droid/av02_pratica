import { knex } from '../database/knex.js';

const tabela = 'jogo';

export const jogoRepository = {
  getAll() {
    return knex(tabela).select('*');
  },

  getById(id) {
    return knex(tabela).where({ id }).first();
  },

  async create(dados) {
    const [jogo] = await knex(tabela).insert(dados).returning('*');
    return jogo;
  },

  async update(id, dados) {
    const [jogo] = await knex(tabela)
      .where({ id })
      .update(dados)
      .returning('*');
    return jogo;
  },

  async delete(id) {
    const [jogo] = await knex(tabela)
      .where({ id })
      .delete()
      .returning('*');
    return jogo;
  },
};

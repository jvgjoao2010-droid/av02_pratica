repositoio
import { pool } from "../config/db.js";

class jogoRepository {

    async getAll() {
        const res = await pool.query('SELECT * FROM jogo');
        return res.rows;
    }

    async getById(id) {
        return knex('jogo').where({ id }).first();
    }

    async create(dados) {
        const {  } = dados;

        const res = await pool.query(
            'INSERT INTO jogo () VALUES ($1, $2, $3, $4) RETURNING *',
            [id, descricao, curtidas, criado_em, preco]
        );

        return res.rows[0];
    }

    async update(id, dados) {
        const { id, titulo, plataforma, data_lacamento} = dados;
        const res = await pool.query(
            'UPDATE jogo SET id = $1, titulo = $2, plataforma = $3, data_lacamento= $4 WHERE id = $5 RETURNING *',
            [id, descricao, curtidas, criado_em, preco, id]
        );
        return res.rows[0];
    }

    async delete(id) {
        const res = await pool.query('DELETE FROM Posts WHERE id = $1 RETURNING *', [id]);
        return res.rows[0];
    }
}

export const postRepository = new jogoepository(); 
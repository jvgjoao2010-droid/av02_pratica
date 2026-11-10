import { jogoService } from '../services/jogo.service.js';

class JogoController {
  async getAll(_req, res) {
    try {
      return res.json(await jogoService.getAll());
    } catch (error) {
      console.error(error);
      return res.status(500).json({ erro: 'Erro ao listar jogos.' });
    }
  }

  async getById(req, res) {
    try {
      const jogo = await jogoService.getById(req.params.id);
      if (!jogo) return res.status(404).json({ erro: 'Jogo não encontrado.' });
      return res.json(jogo);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ erro: 'Erro ao buscar jogo.' });
    }
  }

  async create(req, res) {
    try {
      return res.status(201).json(await jogoService.create(req.body));
    } catch (error) {
      console.error(error);
      return res.status(500).json({ erro: 'Erro ao inserir o jogo.' });
    }
  }

  async update(req, res) {
    try {
      const jogo = await jogoService.update(req.params.id, req.body);
      if (!jogo) return res.status(404).json({ erro: 'Jogo não encontrado.' });
      return res.json(jogo);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ erro: 'Erro ao atualizar o jogo.' });
    }
  }

  async delete(req, res) {
    try {
      const jogo = await jogoService.delete(req.params.id);
      if (!jogo) return res.status(404).json({ erro: 'Jogo não encontrado.' });
      return res.json(jogo);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ erro: 'Erro ao excluir jogo.' });
    }
  }
}

export const jogoController = new JogoController();

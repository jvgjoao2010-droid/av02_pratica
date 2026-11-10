import express from 'express';
import jogoRouter from './routes/jogo.route.js';

const server = express();
const port = Number(process.env.PORT) || 3000;

server.use(express.json());
server.use('/jogos', jogoRouter);

server.get('/health', (req, res) => {
  res.json({
    status: 'funcionando',
  });
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
 

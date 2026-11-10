import { jogoRepository } from "../src/repositories/jogo.repository.js";
import jogoRouter from "./routes/jogo.route";

async getAll() {
const jogo = await jogoRepository.getAll();
return jogo;



}


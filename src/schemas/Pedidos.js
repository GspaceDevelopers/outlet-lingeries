import { Schema, model } from "mongoose";


const Pedidos = new Schema({
    idpedido: String,
    nomecliente: String,
    uid: String,
    cpf: Number,
    produto: {
        modelo: String,
    },
    endereco: String,
    cep: String,
    data: String,
    hora: String,
    status: String,
    valor: String,
    codrastreio: String
})
export default model("Pedidos", Pedidos);

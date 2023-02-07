import { model, Schema } from 'mongoose'

const Perguntas = new Schema({
    sumary: String,
    resposta: String
})
export default new model('Perguntas', Perguntas)
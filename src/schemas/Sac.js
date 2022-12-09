import { model, Schema } from 'mongoose'

const Sac = new Schema({
    nome: String,
    email: String,
    mensagem: String,
    data:String
})

export default new model('Sac', Sac)

import { model, schema } from 'mongoose'


const Emailsclientes = new schema({
    nome: String,
    email: String
})
export default new model('Emailsclientes',Emailsclientes)
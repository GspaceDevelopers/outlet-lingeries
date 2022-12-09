import Sac from "../schemas/Sac";

class Saccontroller {
    async post(req, res) {
        const { nome, email, mensagem,data } = req.body;
        const saclist = await Sac.create({
            nome: nome,
            email: email,
            mensagem: mensagem,
            data:data
        })
        return res.json(saclist)
    }
    async get(res, req) {
        const saclist = await Sac.find()
        return res.json(saclist)
    }
}

export default new Saccontroller();

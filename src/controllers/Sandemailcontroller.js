import nodemailer from 'nodemailer'

class Sandemailcontroller {
    async post(req, res) {
        const { mensagem, email } = req.body
        const transporter = await nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            auth: {
                user: 'outletdaslingeries.gspace@gmail.com',
                pass: ''
            }
        })
        transporter.sendMail({
            from: "outletdaslingeries.gspace@gmail.com",
            to: email,
            html: mensagem
        })
        res.json(transporter)
    }
}

export default new Sandemailcontroller();
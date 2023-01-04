import nodemailer from 'nodemailer'

class Sandemailcontroller {
    post(req, res) {
        const { mensagem, email } = req.body
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            auth: {
                user: 'outletdaslingeries.gspace@gmail.com',
                pass: 'qrqujkflralvcawj'
            }
        })
        transporter.sendMail({
            from: "outletdaslingeries.gspace@gmail.com",
            to: email,
            html: mensagem,
            subject:'Outlet das Lingeries'
        })
        return res.json(transporter)
    }
}

export default new Sandemailcontroller();

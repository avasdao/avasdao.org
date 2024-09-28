/* Import modules. */
import nodemailer from 'nodemailer'

/* Initialize transporter. */
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.forwardemail.net',
    port: process.env.SMTP_PORT || 465, // SSL is recommeded over TLS/STARTTLS
    secure: true,
    auth: {
        user: process.env.SMTP_USER || '',
        pass: process.env.SMTP_PASS || '',
    },
})

/**
 * Send Mail
 *
 * Sends an email in both (text and HTML) formats.
 */
export default async (_text, _html) => {
    /* Set message parameters. */
    const params = {
        from: `"Ava Support" <support@avasdao.org>`, // sender address
        to: `info@hos.im, shomari@avasdao.org`,
        subject: `Ava Daemon Notification`, // Subject line
        text: _text,
        html: _html,
    }

    /* Send mail. */
    const info = await transporter.sendMail(params)
    console.log('SENDMAIL (info)', info)

    /* Return message id. */
    return info.messageId
}

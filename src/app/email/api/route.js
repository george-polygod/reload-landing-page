import {NextResponse, NextRequest} from 'next/server'

const {createTransport} = require('nodemailer');

export async function GET(request) {
    const transporter = createTransport({
        host: "smtp-auth.mailprotect.be",
        port: 467,
        auth: {
            user: "info@reload.games",
            pass: "Ky5fYgltUzd7Sr3",
        },
    });

    const mailOptions = {
        from: 'georgesdagher98@hotmail.com',
        to: 'georgesdagher98@hotmail.com',
        subject: `Your subject`,
        text: `Your text content`
    };

    var result = mailOptions
    try {
        const app = await transporter.sendMail(mailOptions);
        result = app
    }
    catch (e){
        result=e
    }


    // const { searchParams } = new URL(request.url)
    // const id = searchParams.get('id')
    // const res = await fetch(`https://data.mongodb-api.com/product/${id}`, {
    //     headers: {
    //         'Content-Type': 'applicatiton/json',
    //         'API-Key': process.env.DATA_API_KEY,
    //     },
    // })
    // const product = await res.json()

    return Response.json({'product': result})
}
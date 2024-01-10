import {NextResponse, NextRequest} from 'next/server'

export async function POST(request, {params}) {

    const nodemailer = require("nodemailer");

    const transporter = nodemailer.createTransport({
        host: "smtp-auth.mailprotect.be",
        port: 465,
        secure: true,
        auth: {
            // TODO: replace user and pass values from <https://forwardemail.net>
            user: "info@reload.games",
            pass: "Ky5fYgltUzd7Sr3",
        },
    });
    try {
        const json = await request.json()
        const email = json.email

        if (email) {
            const info = await transporter.sendMail({
                from: 'info@reload.games', // sender address
                to: email, // list of receivers
                subject: email + " Registered Interest On reload ✔", // Subject line
                text: email + " Registered Interest On reload", // plain text body
            });
            const info2 = await transporter.sendMail({
                from: 'info@reload.games', // sender address
                to: 'info@reload.games', // list of receivers
                subject: email + " Registered Interest On reload ✔", // Subject line
                text: email + " Registered Interest On reload", // plain text body
            });
        } else {
            return Response.json({"error": email})
        }
    } catch (e) {
        return Response.json({"error": e.message})
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

    return Response.json({'product': 'success'})
}
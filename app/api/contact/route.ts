import { sendEmail } from "@/utils/email.utils";

export const POST = async (request:Request) => {
    try {
        const {firstname,lastname,email,message,subject}=await request.json()

        const data = {
            htmlMessage: `
                <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">
                    <h2>Asking For help About Us</h2>
                    <p><strong>Name:</strong> ${firstname} ${lastname}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Message:</strong> ${message}</p>
                </div>
            `
        };

        const recipients = [
            {
                name: "chancedira",
                address: "chancedesire60@gmail.com"
            },
            {
                name: "Calvin Buka",
                address: "calvinbukarani@gmail.com"
            }
        ];
        const results = await sendEmail({
            sender:{
                name:`${firstname} ${lastname}`,
                address:email
            },
            recipients,
            subject:subject,
            message: message,
            data:data
        });

        return new Response(JSON.stringify({ accepted: results.accepted }), { status: 200 });
    } catch (error) {
        console.log("error", error);
        return new Response(JSON.stringify(error), { status: 500 });
    }
};
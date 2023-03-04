
const nodemailer = require("nodemailer")



/*------------------- Start's Send OTP On Email -------------------------*/

const sendEmail = async (email, subject, text) => {

    try {

        const transporter = nodemailer.createTransport({

            service: 'gmail',

            hosts: 'smpt.gmail.com',

            auth: {

                user: 'thinkinternet2020@gmail.com',

                pass: 'uvlzafgssdnfknba'
            }

        });

        await transporter.sendMail({

            from: 'thinkinternet2020@gmail.com',

            to: email,

            subject: "Local Happinez Please verify your OTP",

            html: `<body style="padding: 50px;">

            <div style="padding: 20px; border-radius: 10px; border: 1px solid gray;">
            <h1 style="text-align: center">Let's verify your OTP to Active your account</h1>
                        <p style="text-align: center">A sign in attempt requires further verification because we did not recognize your
                            device. To complete the sign in, enter the verification code on the unrecognized device.</p>
                        <div>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNmCvNTyyVkSryj0kgAzAsN4SIt7KzRRgdKO33KyUmKw&s"
                                style="display: block;
                                        margin-left: auto;
                                        margin-right: auto;
                                        width: 50%; width: 50px;">
                        </div>
                        <h2 style="text-align: center; background-color: #e3e3e3; display: block;
                                        margin-left: auto;
                                        margin-right: auto;
                                        width: 50%; width: 100px;
                                        border-radius: 10px;
                                        padding: 10px 10px">${text}</h2></div>
            </body>`,
            text: text,

        });

        console.log("Email sent sucessfully");

    } catch (error) {

        console.log("Email not sent");

        console.log(error);
    }
};

/*------------------- End Send OTP On Email -------------------------*/

/********************************Start's Send OTP for Forgot password On Email*****************************/
const sendEmailforget = async (email, subject, text) => {

    try {

        const transporter = nodemailer.createTransport({

            service: 'gmail',

            hosts: 'smpt.gmail.com',

            auth: {

                user: 'thinkinternet2020@gmail.com',
                
                pass: 'uvlzafgssdnfknba'
            }

        });

        await transporter.sendMail({

            from: 'thinkinternet2020@gmail.com',


            to: email,

            subject: "local Happinez Please verify your OTP",

            html: `<html>
            <body style="padding: 50px;">
            
            <div style="padding: 20px; border-radius: 10px; border: 1px solid gray;">
            <h1 style="text-align: center">Let's verify your OTP to Forgot Password</h1>
                        <p style="text-align: center">A sign in attempt requires further verification because we did not recognize your
                            device. To complete the sign in, enter the verification code on the unrecognized device.</p>
                        <div>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNmCvNTyyVkSryj0kgAzAsN4SIt7KzRRgdKO33KyUmKw&s"
                                style="display: block;
                                        margin-left: auto;
                                        margin-right: auto;
                                        width: 50%; width: 50px;">
                        </div>
                        <h2 style="text-align: center; background-color: #e3e3e3; display: block;
                                        margin-left: auto;
                                        margin-right: auto;
                                        width: 50%; width: 100px;
                                        border-radius: 10px;
                                        padding: 10px 10px">${subject}</h2></div>
            </body>
            </html>`,
            text: text

        });

        console.log("email sent sucessfully");

    } catch (error) {

        console.log("email not sent");

        console.log(error);
    }
};

/********************************End Send OTP for Forgot password On Email*****************************/



module.exports = { sendEmail, sendEmailforget}
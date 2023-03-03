const userModel = require("../models/userModel");
const qrcode = require('qrcode');
const nodemailer = require('nodemailer');

// const sendMail = require('./sendEmail')




exports.postInvitation =  async (req, res) => {
    try {

        let {name, email, mobileNo} = req.body

        if(!name){

            return res.render('dashboard', { err_msg: "Name is required" })
        }

        if(!email){

            return res.render('dashboard', { err_msg: "Email is required" })
        }

        if(!mobileNo){

            return res.render('dashboard', { err_msg: "mobileNo is required" })
        }
      

            let isExist = await userModel.findOne({ email: req.body.email })

            if (isExist) {
                return res.render('dashboard', { err_msg: "Invitation card All Ready send" })
            }

            let text = (`${name} \n ${email}  \n ${mobileNo}`)

            const qrCodeImage = await qrcode.toDataURL(text);

            const transporter = nodemailer.createTransport({

                service: 'gmail',
    
                hosts: 'smpt.gmail.com',
    
                auth: {
    
                    user: 'sirishkarri1@gmail.com',
    
                    pass: 'jretxzutggdmxnjk'
                }
    
            });
          
              // Define email options
              const mailOptions = {
                from: 'thinkinternet2020@gmail.com',
                to: email,
                subject: 'Your QR code',
                html: `<!DOCTYPE html>
                <html>
                  <head>
                    <meta charset="UTF-8">
                    <title>Happy Holi Invitation Card</title>
                    <style>
                      /* Styling for the card container */
                      .card {
                        max-width: 600px;
                        margin: 0 auto;
                        border-radius: 10px;
                        background-color: #FFFFFF;
                        overflow: hidden;
                        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
                      }
                      
                      /* Styling for the card header */
                      .card-header {
                        padding: 20px;
                        background-color: #FF0066;
                        color: #FFFFFF;
                        text-align: center;
                      }
                      
                      /* Styling for the card content */
                      .card-content {
                        padding: 20px;
                        text-align: center;
                      }
                      
                      /* Styling for the heading */
                      h1 {
                        font-size: 42px;
                        margin-top: 0;
                        margin-bottom: 10px;
                        color: #FF0066;
                      }
                      
                      /* Styling for the subheading */
                      h2 {
                        font-size: 30px;
                        margin-top: 0;
                        margin-bottom: 10px;
                        color: #FF0066;
                      }
                      
                      /* Styling for the main message */
                      p {
                        font-size: 20px;
                        line-height: 1.5;
                        margin-top: 0;
                        margin-bottom: 20px;
                      }
                      
                      /* Styling for the CTA button */
                      .btn {
                        display: inline-block;
                        padding: 10px 30px;
                        border-radius: 5px;
                        text-decoration: none;
                        background-color: #FF0066;
                        color: #FFFFFF;
                        font-size: 20px;
                        font-weight: bold;
                        transition: background-color 0.3s ease;
                      }
                      
                      /* Hover state for the CTA button */
                      .btn:hover {
                        background-color: #FF3399;
                      }
                      
                      /* Styling for the footer */
                      .card-footer {
                        padding: 20px;
                        background-color: #FF0066;
                        color: #FFFFFF;
                        text-align: center;
                      }
                      
                      /* Styling for the footer text */
                      .card-footer p {
                        margin: 0;
                      }
                      
                      /* Background pattern */
                      body {
                        background-image: linear-gradient(45deg, #FFC107, #FFEB3B, #4CAF50, #00BCD4, #9C27B0, #FF9800);
                        background-size: 400% 400%;
                        animation: GradientBG 15s ease infinite;
                      }
                      
                      @keyframes GradientBG {
                        0% {
                          background-position: 0% 50%;
                        }
                        50% {
                          background-position: 100% 50%;
                        }
                        100% {
                          background-position: 0% 50%;
                        }
                      }
                    </style>
                  </head>
                  <body>
                    <div class="card">
                      <div class="card-header">
                        <h1>Happy Holi!</h1>
                        <h2>You're Invited</h2>
                      </div>
                      <div class="card-content">
                      <h1>Happy Holi!</h1>
                      <h2>${name}</h2>
                      <p>You are cordially invited to our Holi party.</p>
                      <p>Date: March 29th, 2022<br>
                      Time: 4:00 PM<br>
                      Venue: Our backyard<br>
                      Address: 123 Main St, Anytown</p>
                      <img src="cid:qrcode.png" alt="Invitation Image">
                      </div>
                    </body>
                    </html>
                                `,
                attachments: [{
                    filename: 'qrcode.png',
                    content: qrCodeImage.split(';base64,').pop(),
                    encoding: 'base64',
                    cid: 'qrcode.png'
                  }],
                
              };


          
              // Send email
              const info = await transporter.sendMail(mailOptions);
              console.log(`Email sent: ${info.messageId}`);



            await userModel.create(req.body)

            return res.render('dashboard', { success: "Invitation card send successfully" })

    } catch (e) {
        console.log(e)
        return res.send({ Error: e.message })
    }
}


exports.DashboardPage = async (req, res) => {
    try {

        res.render('dashboard')

    } catch (e) {
        console.log(e)
        return res.send({ Error: e.message })
    }
}

exports.listInvitation = async (req, res) => {
    try {

        res.render('listInvitation')

    } catch (e) {
        console.log(e)
        return res.send({ Error: e.message })
    }
}



exports.getListInvitation =  async(req,res)=>{
    try{
         

           let lastBill = await userModel.find() 

            res.render('listInvitation', {details: lastBill})       
        
    }catch(e){
        console.log(e)
        return res.send({Error: e.message})
    }
}




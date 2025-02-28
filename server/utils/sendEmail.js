import nodemailer from "nodemailer";
const sendEmail = async ({ email_id, subject, message }) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    service: process.env.SMTP_SERVICE,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const option = {
    from: process.env.SMTP_MAIL,
    to: email_id,
    subject,
    html: message,
  };

  return await transporter.sendMail(option);
};

export { sendEmail };

// transporter.sendMail(mailOptions, (error, info) => {
//   if (error) {
//     console.error("Error sending email: ", error);
//   } else {
//     console.log("Email sent: ", info.response);
//   }
// });

//  verify connection configuration
// transporter.verify(function (error, success) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Server is ready to take our messages");
//   }
// });

// const sendEmail = async ({ email_id, subject, message }) => {
//   return new Promise(async (resolve, reject) => {
//     const transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST,
//       service: process.env.SMTP_SERVICE,
//       port: process.env.SMTP_PORT,
//       secure: true,
//       auth: {
//         user: process.env.SMTP_MAIL,
//         pass: process.env.SMTP_PASSWORD,
//       },
//     });

//     const option = {
//       from: process.env.SMTP_MAIL,
//       to: email_id,
//       subject,
//       html: message,
//     };

//     return transporter.sendMail(option, (error, info) => {
//       if (error) {
//         reject("Please try after some time");
//       }
//       return resolve(info);
//     });
//   }).catch((error) => {
//     throw error;
//   });
// };

// const sendEmail = async ({ email_id, subject, message }) => {
//   try {
//     const transporter = await nodemailer.createTransport({
//       host: process.env.SMTP_HOST,
//       service: process.env.SMTP_SERVICE,
//       port: process.env.SMTP_PORT,
//       secure: true,
//       auth: {
//         user: process.env.SMTP_MAIL,
//         pass: process.env.SMTP_PASSWORD,
//       },
//     });

//     const option = {
//       from: process.env.SMTP_MAIL,
//       to: email_id,
//       subject,
//       html: message,
//     };

//     const verifyConnnection = await transporter.verify(
//       async (error, success) => {
//         if (error) {
//           throw new Error("Email server not ready");
//         }

//         return success;
//       }
//     );

//     console.log(verifyConnnection);

//     // return resolve(await transporter.sendMail(option));

//     return;
//   } catch (error) {
//     throw new ErrorHandler(401, error);
//   }
// };

// export { sendEmail };

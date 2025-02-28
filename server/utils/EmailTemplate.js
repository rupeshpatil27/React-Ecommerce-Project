const otpEmailTemplate = (verificationCode) => {
    return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email OTP Template</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }

        .email-container {
            width: 100%;
            padding: 20px;
            background-color: #f4f4f4;
            display: flex;
            justify-content: center;
        }

        .email-content {
            background-color: #ffffff;
            border-radius: 8px;
            padding: 30px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 600px;
        }

        .header {
            text-align: center;
            margin-bottom: 20px;
        }

        .header h1 {
            font-size: 26px;
            color: #333;
        }

        .otp-code {
            text-align: center;
            font-size: 32px;
            font-weight: bold;
            background-color: #f1f1f1;
            padding: 20px;
            margin: 20px 0;
            border-radius: 8px;
            color: #333;
        }

        .message {
            font-size: 16px;
            line-height: 1.6;
            color: #555;
            text-align: center;
        }

        .footer {
            margin-top: 20px;
            text-align: center;
            font-size: 14px;
            color: #777;
        }

        .footer a {
            color: #3498db;
            text-decoration: none;
        }

        .footer a:hover {
            text-decoration: underline;
        }
    </style>
</head>

<body>
    <div class="email-container">
        <div class="email-content">
            <div class="header">
                <h1>Your OTP Code</h1>
            </div>

            <div class="otp-code">
                ${verificationCode}
            </div>

            <div class="message">
                Hello, <br>
                Your One-Time Password (OTP) is provided below. Please use it to complete your action within the next 5
                minutes.<br><br>
                If you did not request this, please ignore this email.
            </div>

            <div class="footer">
                <p>Thank you for using our services!</p>
                <p>If you have any questions, feel free to <a href="#">contact us</a>.</p>
            </div>
        </div>
    </div>
</body>
</html>`;
};

export {otpEmailTemplate};

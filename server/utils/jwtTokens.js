const sendToken = (userFn, user, statusCode, res) => {
  const token = userFn.getJWTToken(user);

  // const options = {
  //     expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
  //     httpOnly: true
  // }

  // res.status(statusCode).cookie("token",token,options).json({
  //     success:true,
  //     user1,
  //     token,
  // });

  res.status(statusCode).json({
    success: true,
    user,
    token,
  });
};

module.exports = sendToken;

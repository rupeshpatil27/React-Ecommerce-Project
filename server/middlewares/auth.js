const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const User = require("../modals/userModal");

exports.isAuthenticateUser = catchAsyncErrors(async (req, res, next) => {
  // const { token } = req.cookies;
  const { authorization } = req.headers;

  if (!authorization || authorization == "Bearer undefined") {
    return next(new ErrorHandler("Please Login To Access This Feature", 401));
  }
  // if (authorization == "Bearer undefined") {
  //   return next(new ErrorHandler("Please Login To Access This Feature", 401));
  // }
  if (authorization && authorization.startsWith("Bearer")) {
    token = authorization.split(" ")[1];
    if (token !== "undefined") {
      const decodeData = jwt.verify(token, process.env.JWT_SECRET_KEY);
      // req.user = await User.findById(decodeData.id);
      User.getUser(decodeData.user, async (err, user) => {
        req.user = user;

        next();
      });
    }
  }
});

exports.authorizedRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(
          `Role ${req.user.role} is not allowes to access the page`,
          403
        )
      );
    }

    next();
  };
};

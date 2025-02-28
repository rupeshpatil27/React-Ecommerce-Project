// const asyncHandler = theFunc => (req, res, next) => {
//     Promise.resolve(theFunc(req, res, next)).catch(next);
// }

const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
  };
};

// const asyncHandler = (requestHandler) => async (req, res, next) => {
//   try {
//     await requestHandler(req, res, next);
//   } catch (error) {
//     res.status(error.statusCode || 500).json({
//       success: false,
//       message: error.message,
//       statusCode:error.statusCode
//     });
//   }
// };

export { asyncHandler };

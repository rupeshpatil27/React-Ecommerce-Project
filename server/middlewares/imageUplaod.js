const multer = require("multer");

exports.uplodimg = (req,res,next) => {
  const upload = multer({
    storage: multer.diskStorage({
      destination: function (req, file, cb) {
        cd(null, "E:New folder (2)imageuplode");
      },
      filename: function (req, file, cb) {
        cd(null, file.originalname);
      },
    }),
  }).single("adhar_detail");
  next()
};

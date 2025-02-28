import mysql from "mysql";
// import { asyncHandler } from "../utils/asyncHandler";


let databaseInstance="";
const connectDB = async () => {
  try {
    databaseInstance = await new mysql.createConnection({
      host: process.env.HOST,
      user: process.env.USER,
      database: process.env.NAME,
      password: process.env.PASS,
    });

    await databaseInstance.connect(function (err) {
      if (err) {
        return (
          console.log("Error While Connection to Mysql...!!!"), process.exit(1)
        );
      }

      console.log(
        `mysql Databse Connected...!!! HOST: ${databaseInstance.config.host}`
      );
    });

    return databaseInstance;
  } catch (error) {
    console.log("mySQL Connection Error...!!!", error);
    process.exit(1);
  }
};

const connectEndDB = async () => {
  try {
    databaseInstance.end(function (err) {
      if (err) {
        console.log("Error While Closing Connection to Mysql....");
        process.exit(1);
      }
    });

    console.log("mysql Databse Connection Ended..!");
  } catch (error) {
    console.log("mySQL Connection Error", error);
    process.exit(1);
  }
};

export { connectDB, connectEndDB,databaseInstance };

// database promise function

/* const connectDB = async () => {
  try {
    await new Promise((resolve, reject) => {
      databaseInstance.connect((err) => {
        return err
          ? reject(
              console.log("Error While Connection to Mysql...!!!", err),
              process.exit(1)
            )
          : resolve(
              console.log(
                `mysql Databse Connected...!!! HOST: ${databaseInstance.config.host}`
              )
            );
      });
    });
  } catch (error) {
    console.log("mySQL Connection Error...!!!", error);
    process.exit(1);
  }
};

*/

// const connectDB = async () => {
//   try {
//     databaseInstance.connect(function (err) {
//       if (err) {
//         console.log("Error While Connection to Mysql...!!!");
//         process.exit(1);
//       }

//       console.log(
//         `mysql Databse Connected...!!! HOST: ${databaseInstance.config.host}`
//       );
//     });

//   } catch (error) {
//     console.log("mySQL Connection Error...!!!", error);
//     process.exit(1);
//   }
// };

// const connectEndDB = async () => {
//   try {
//     databaseInstance.end(function (err) {
//       if (err) {
//         console.log("Error While Closing Connection to Mysql....");
//         process.exit(1);
//       }
//     });

//     console.log("mysql Databse Connection Ended..!");
//   } catch (error) {
//     console.log("mySQL Connection Error", error);
//     process.exit(1);
//   }
// };

// export { connectDB, connectEndDB };

// await databaseInstance.connect((err) => {
//   if (!err) console.log("mysql Databse Connected..!");
//   else console.log("mysql not connect",err);
// });

// const mysql = require("mysql");
// const dotenv = require('dotenv');

// dotenv.config({ path: "configuration/config.env" });

//   const db = mysql.createConnection({
//     host: process.env.HOST,
//     user: process.env.USER,
//     database: process.env.NAME,
//     password: process.env.PASS,
//   });
//   db.connect((err) => {
//     if (!err) console.log("connected");
//     else console.log(err);
//   });

// module.exports = db;

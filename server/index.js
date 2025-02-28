import dotenv from "dotenv";
import { connectDB } from "./database/database.js";

import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 3000;

(async () => {
  await connectDB();

  const server = app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
  });
})();

// connectDB();

// const server = app.listen(port, () => {
//   console.log(`server is running on http://localhost:${port}`);
// });

// connectDB()
//   .then(() => {

//     app.on("error",(error)=>{
//       console.log("Initial Error: ",error)
//       throw error
//     })

//     app.listen(port, () => {
//       console.log(`server is running on http://localhost:${port}`);
//     });
//   })
//   .catch((err) => {
//     console.log("mysql db connection failed!!!", err);
//   });

// (async () => {
//   const db = await connectDB();

//   db.connect((error) => {
//     if (error) {
//       console.log("Initial Error: ", error);
//       throw error;
//     }

//     const server = app.listen(port, () => {
//       console.log(`server is running on http://localhost:${port}`);
//     });
//   });
// })();

import app from "./app";
import { database } from "./sequelize";

database.authenticate().then(() => {
  console.log("Connection has been established successfully.");
  app.listen(3001, async () => {
    console.log("Server is running!");
  });
}).catch((err)=>{
  console.log(err.message)
});

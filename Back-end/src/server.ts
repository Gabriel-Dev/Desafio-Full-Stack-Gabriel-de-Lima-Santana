import { app } from "./app";
import { sequelize } from "./database/config/database";

try {
  sequelize.authenticate().then(()=>{
      console.log("Connection has been established successfully.");
      app.listen(3001, async () => {
        console.log("Server is running!");
      });
  });
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

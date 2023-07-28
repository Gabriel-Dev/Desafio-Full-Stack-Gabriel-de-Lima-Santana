import { app } from "./app";
import { database } from "./sequelize";

try {
  database.authenticate().then(() => {
    console.log("Connection has been established successfully.");
    app.listen(3001, async () => {
      console.log("Server is running!");
    });
  });
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

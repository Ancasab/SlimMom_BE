const mongoose = require("mongoose");
const app = require("./app");

const { DB_HOST, PORT = process.env.PORT || 8080 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connection successful");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });



const express = require('express');
const cors = require('cors');
const app = express();
const usersRouter = require("./routes/users/UsersRouter.js");
const port = 3000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.use("/users", usersRouter);
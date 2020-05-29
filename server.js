const express = require("express");
const app = express();
app.use(express.json());

const port = 5000 || process.env.PORT;
app.listen(port, () => console.log(`App is running on port ${port}`));

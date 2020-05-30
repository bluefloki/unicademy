const express = require("express");
const app = express();
app.use(express.json());

const fileUpload = require("express-fileupload");
app.use(fileUpload());

app.use("/api/v1", require("./routes/api/indexRouter"));

const port = 5000 || process.env.PORT;
app.listen(port, () => console.log(`App is running on port ${port}`));

console.log("Hola Mundo TS");

const PORT  = 3001;
import app from "./server";

const favicon = require("serve-favicon")

app.listen(PORT , () => {
  console.log(`Example app listening on port ${PORT}`)
})



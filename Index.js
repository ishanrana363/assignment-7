const app = require("./App")
require("dotenv").config()
const port = process.env.RUNNING_PORT || 3000

app.listen(port,()=>{
    console.log(`Server running successfully at http://localhost:${port}`);
})
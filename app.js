const express = require('app.js');

const PORT = process.env.PORT || 1969;
const app = express();
app.use(express.static('public'));
app.use(express.json());
app.listen(PORT,()=>{
  console.log(`Listening at port: ${PORT}`);
})

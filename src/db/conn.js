// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/bombay_realty', {
//     useNewUrlParser:true,
//     useUnifiedTopology:false,
//     useCreateIndex:true
// }).then(() =>{
//     console.log(`connection successful`);
// }).catch((e) => {
//     console.log(`connection unsuccessful`)
// });

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/bombay_realty', {
    useNewUrlParser:true,
    useUnifiedTopology:false,
    // useCreateIndex:true
  });
}
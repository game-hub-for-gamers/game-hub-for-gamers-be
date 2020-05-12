const db = require("../config/dbconfig.js");

// const add = user =>{
//   return  db("games").insert(user,"id")
// }
const find = ( ) => {
  return db("games");
}

// const findbyID = id => {
//   return db("games").where("id",id)
// }

module.exports= {
  find
}
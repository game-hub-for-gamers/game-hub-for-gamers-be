const db = require("../config/dbconfig.js");

const add = user =>{
  return  db("users").insert(user,"id")
}
const find = ( ) => {
  return db("users");
}

const findbyID = id => {
  return db("users").where("id",id)
}


module.exports = {
  add,
  find,
  findbyID,
};

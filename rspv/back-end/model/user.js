const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    Name: {type: String, required: true},
    Surname: {type: String, required: true},
    Email: {type: String, required: true},
    Dietary: {type: String, required: true },
})
// class ProductCategoryRow extends React.Component {
//     render() {
//return (
//     <tr>
//       <td>{name}</td>
//       <td>{Surname}</td>
//     </tr>
module.exports = mongoose.model ("User", userSchema);
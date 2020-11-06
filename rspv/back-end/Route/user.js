
const User = require('../model/user')

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import { BrowserRouter } from "react-router-dom";

// ReactDOM.render(
//   <BrowserRouter>



//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );
// console.log("route")
//         const { name, surname, email, dietaryRequirements } = req.body
//         const user = new User ({
//             name: name,
//             surname: surname,
//             email: email,
//             dietaryRequirements: dietaryRequirements,
//         })
// try {


const route = (app) => {
    app.post("/book", async(req, res)  => {
        
console.log("route")
        const { name, surname, email, dietaryRequirements } = req.body
        const user = new User ({
            name: name,
            surname: surname,
            email: email,
            dietaryRequirements: dietaryRequirements,
        })
try {
    const saveUser = await user.save();
    res.send(savedUser);

}
catch(error) {
    res.send(error);
}
    })
}

module.exports = { route }
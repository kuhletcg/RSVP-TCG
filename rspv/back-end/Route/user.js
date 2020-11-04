const User = require('../model/user')

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
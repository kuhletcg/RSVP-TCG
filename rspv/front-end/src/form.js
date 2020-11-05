import React, { useState } from 'react';

export default function Form(params) {
    const [information, setInformation] = useState({name: '',surname: '',Email: '',DietaryRequirement: ''})
    const [data, setData] = useState([])
    const handleChange=(event)=> {
        setInformation({...information,[event.target.name]: event.target.value});
    }   
    const handleSubmit=()=>{
       setData(information) 
        console.log(information) 
    }

    
     return(
        <div class = "row">
            <div>
            Name:
            <input onChange={handleChange} name='name' type="text" value={information.name} />
            </div>
            <div>
            Surname:
            <input onChange={handleChange} name='surname' type="text" value={information.surname} />
            </div>
            <div>
            Email:
            <input onchange={handleChange} name='email' type="text" value={information.email} />
            </div>
            <div>
            DietaryRequirement:
            <input onchange={handleChange} name='dietaryRequirement' type='text' value={information.DietaryRequirement} />
            </div>
            <input onClick={handleSubmit} type="submit" value="Submit" /><br/>
            {/* {data.map(t => <div>{t.name}  {t.surname}</div>)} */}
            {/* Name: {data.name} <br/>
            Surname:{data.surname} */}
            </div>
            
    )
            
    
    
}

const validate=(data)=>{
    const errors=[];
    if(!data.firstName){
        errors.push("Missing First Name")
    }
    if(!data.lastName){
        errors.push("Missing Last Name")
    }
    const emailRegex= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if(!data.email||!emailRegex.test(data.email.toString())){
        errors.push("Invalid Email");
    }

    const phoneRegex=/^\d{10}$/
    if(!data.phone|| !phoneRegex.test(data.phone.toString())){
        errors.push("Invalid Phone Number");
    }

    const validGenders=["Male","Female","Other"];
    if(!validGenders.includes(data.gender)){
        errors.push("Invalid Gender");
    }
    return errors;
}

module.exports= validate;
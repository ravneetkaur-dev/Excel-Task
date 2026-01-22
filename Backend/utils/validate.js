const {z}= require('zod');

const validateSchema= z.object({
    firstName: z.string().min(1, "Missing First Name"),
    lastName: z.string().min(1, "Missing Last Name"),
    email: z.string().email("Invalid Email"),
    phone: z.string().regex(/^\d{10}$/, "Invalid Phone Number"),
    gender: z.enum(["Male", "Female", "Other"], {message: "Invalid Gender"})
})

// const validate=(data)=>{
//     const errors=[];
//     if(!data.firstName){
//         errors.push("Missing First Name")
//     }
//     if(!data.lastName){
//         errors.push("Missing Last Name")
//     }
//     const emailRegex= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
//     if(!data.email||!emailRegex.test(data.email.toString())){
//         errors.push("Invalid Email");
//     }

//     const phoneRegex=/^\d{10}$/
//     if(!data.phone|| !phoneRegex.test(data.phone.toString())){
//         errors.push("Invalid Phone Number");
//     }

//     const validGenders=["Male","Female","Other"];
//     if(!validGenders.includes(data.gender)){
//         errors.push("Invalid Gender");
//     }
//     return errors;
// }

module.exports= validateSchema;
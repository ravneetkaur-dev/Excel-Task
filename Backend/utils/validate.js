const {z}= require('zod');

const validateSchema= z.object({
    firstName: z.string().min(1, "Missing First Name"),
    lastName: z.string().min(1, "Missing Last Name"),
    email: z.string().email("Invalid Email"),
    phone: z.string().regex(/^\d{10}$/, "Invalid Phone Number"),
    gender: z.enum(["Male", "Female", "Other"], {message: "Invalid Gender"})
})


module.exports= validateSchema;
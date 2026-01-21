import axios from 'axios'

const api= axios.create({
    baseURL: 'http://localhost:5000'
})

export const uploadFile= (file)=>{
    const formData= new FormData();
    formData.append("file",file);

    return api.post("/", formData)
}

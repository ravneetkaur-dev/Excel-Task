import axios from 'axios'

const api= axios.create({
    baseURL: 'http://localhost:5000'
})

export const uploadFile= async(file)=>{
    // console.log("uploadFile called with:", file);
    const formData= new FormData();
    formData.append("file",file);

    const {data}= await api.post("/", formData);
    return data;
}

export const getValidRecords= async()=>{
    try{
        const {data}= await api.get('/');
        return data;
    }catch(err){
        console.log("Error while fetching the records..");
    }
}

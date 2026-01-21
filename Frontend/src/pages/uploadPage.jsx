import { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { uploadFile } from "../api/api";
import { DataCards } from "../component/cards";
import { ErrorTable } from "../component/resultTable";

export const UploadPage=()=>{
    const [file, setFile]= useState(null);
    const [result, setResult]= useState(null);
    const [loading, setLoading]= useState(false);

    const handleUpload= async()=>{
        if(!file){
            alert("Please select a file first!!");
            return;
        }
        try{
            setLoading(true);
            const res= await uploadFile(file);
            setResult(res.data);
        }catch(err){
            console.error(err);
            alert("Upload failed!!");
        }finally{
            setLoading(false);
        }
    }

    return(
        <>
            <Container className="mt-4">
                <h3>Excel Import</h3>
                <Form.Group className="mb-3">
                    <Form.Control
                        type="file"
                        accept=".xls, .xlsx"
                        onChange={(e)=>setFile(e.target.files[0])}
                    ></Form.Control>
                </Form.Group>
                <Button className="mb-4" onClick={handleUpload}>Upload File</Button>
                <DataCards result={result} loading={loading}/>
                <ErrorTable errors={result?.errors}/>
            </Container>
        </>
    )
}



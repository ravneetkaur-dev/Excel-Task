import { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { uploadFile, getValidRecords } from "../api/api";
import { DataCards } from "../component/cards";
import { ResultTable } from "../component/resultTable";
import { useMutation, useQuery, useQueryClient} from "@tanstack/react-query"

export const UploadPage=()=>{
    const [file, setFile]= useState(null);

    const {data: validRecords, isPending, isStale, isError: isValidError, error: validError, refetch}= useQuery({
        queryKey: ["valid-records"],
        queryFn: getValidRecords, 
        staleTime: 0,
        enabled: false
    })
    // console.log("isStale:", isStale);

    const {mutate, data:result, isPending: loading, isError, error}= useMutation({
        mutationFn: uploadFile,
        onMutate: (file)=>{
            console.log("Mutation started with:", file);
        },
        onSuccess: (data)=>{
            console.log("Upload Success..",data);
            refetch();
        },
        onError: (err)=>{
            console.error("Upload Error..",err);
        }
    })

    const handleUpload= async()=>{
        if(!file){
            alert("Please select a file first!!");
            return;
        }
        
        mutate(file);
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
                <Button className="mb-4" onClick={handleUpload} disabled={loading}>{loading?"Uploading...": "Upload File"}</Button>
                {isError && (
                    <p className="text-danger">{error.message}</p>
                )}
                <DataCards result={result} loading={loading}/>
                <ResultTable id="invalid" records={result?.errors}/>
                {/* <Button onClick={refetch}>Show Valid Records</Button> */}
                {/* {isPending && <p>Loading valid records...</p>} */}
                <hr />
                {isValidError && (
                <p className="text-danger">
                    Failed to fetch valid records: {validError.message}
                </p>
                )}

                {!isPending && !isValidError && (
                    <ResultTable id="valid" records={validRecords}/>
                )}
            </Container>
        </>
    )
}



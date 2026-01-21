import { Table } from "react-bootstrap";

export const ErrorTable= ({errors})=>{
    if(!errors||errors.length===0){
        return null;
    }

    return(
        <>
            <h5>Invalid Records</h5>
            <Table>
                <thead>
                    <tr>
                        <th>Row</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Gender</th>
                        <th>Error Message</th>
                    </tr>
                </thead>
                <tbody>
                    {errors.map((err, index)=>(
                        <tr key={index}>
                            <td>{err.row}</td>
                            <td>{err.data?.firstName||"-"}</td>
                            <td>{err.data?.lastName||"-"}</td>
                            <td>{err.data?.email||"-"}</td>
                            <td>{err.data?.phone||"-"}</td>
                            <td>{err.data?.gender||"-"}</td>
                            <td>{err.reason}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}



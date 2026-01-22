import { Table } from "react-bootstrap";

export const ResultTable= ({id, records})=>{
    if(!records||records.length===0){
        return null;
    }

    return(
        <>
        {id=="valid"?<h3>Valid Records</h3>:
            <h3>Invalid Records</h3>}
            <Table>
                <thead>
                    <tr>
                        {id==="invalid"&&<th>Row</th>}
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Gender</th>
                        {id==="invalid"&&<th>Error Message</th>}
                    </tr>
                </thead>
                <tbody>
                    {records.map((rec, index) => (
                    <tr key={index}>
                        {id==="invalid"?(
                        <>
                            <td>{rec.row}</td>
                            <td>{rec.data?.firstName||"-"}</td>
                            <td>{rec.data?.lastName||"-"}</td>
                            <td>{rec.data?.email||"-"}</td>
                            <td>{rec.data?.phone||"-"}</td>
                            <td>{rec.data?.gender||"-"}</td>
                            <td>{rec.reason}</td>
                        </>
                        ):(
                        <>
                            <td>{rec.firstName}</td>
                            <td>{rec.lastName}</td>
                            <td>{rec.email}</td>
                            <td>{rec.phone}</td>
                            <td>{rec.gender}</td>
                        </>
                        )}
                    </tr>
                    ))}

                    {/* {records.map((rec, index)=>(
                        <tr key={index}>
                            <td>{rec.row}</td>
                            <td>{rec.data?.firstName||"-"}</td>
                            <td>{rec.data?.lastName||"-"}</td>
                            <td>{rec.data?.email||"-"}</td>
                            <td>{rec.data?.phone||"-"}</td>
                            <td>{rec.data?.gender||"-"}</td>
                            {id=="invalid"&&<td>{rec.reason}</td>}
                        </tr>
                    ))} */}
                </tbody>
            </Table>
        </>
    )
}



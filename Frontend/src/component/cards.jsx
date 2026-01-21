import {Card, Row, Col} from 'react-bootstrap';

export const DataCards= ({result, loading})=>{
    return(
        <>
            <Row className='mb-4'>
                <Col md={3}>
                    <Card className='text-center bg-primary bg-opacity-25 text-primary'>
                        <Card.Body>
                            <Card.Title>Total Records</Card.Title>
                            <Card.Text>
                                <h1>{result?.totalRecords??"-"}</h1>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className='text-center bg-success bg-opacity-25 text-success'>
                        <Card.Body>
                            <Card.Title>Success Records</Card.Title>
                            <Card.Text>
                                <h1>{result?.successRecords??"-"}</h1>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className='text-center bg-danger bg-opacity-25 text-danger'>
                        <Card.Body>
                            <Card.Title>Error Records</Card.Title>
                            <Card.Text>
                                <h1>{result?.errorRecords??"-"}</h1>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className='text-center bg-success bg-opacity-25 text-success'>
                        <Card.Body>
                            <Card.Title>Processing Completed</Card.Title>
                            <Card.Text>
                                <h1>{loading?"Processing...":result?"✅":"-"}</h1>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}






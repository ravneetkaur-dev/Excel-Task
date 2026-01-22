import {Card, Row, Col} from 'react-bootstrap';

export const DataCards= ({result, loading})=>{
    return(
        <>
            <Row className='mb-4'>
                <Col md={3}>
                    <Card className='text-center bg-primary bg-opacity-25 text-primary'>
                        <Card.Body>
                            <Card.Title>Total Records</Card.Title>
                            <Card.Text className='fs-1 fw-bold'>
                                {result?.totalRecords??"-"}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className='text-center bg-success bg-opacity-25 text-success'>
                        <Card.Body>
                            <Card.Title>Success Records</Card.Title>
                            <Card.Text className='fs-1 fw-bold'>
                                {result?.successRecords??"-"}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className='text-center bg-danger bg-opacity-25 text-danger'>
                        <Card.Body>
                            <Card.Title>Error Records</Card.Title>
                            <Card.Text className='fs-1 fw-bold'>
                                {result?.errorRecords??"-"}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className='text-center bg-success bg-opacity-25 text-success'>
                        <Card.Body>
                            <Card.Title>Processing Completed</Card.Title>
                            <Card.Text className='fs-1 fw-bold'>
                               {loading?"Processing...":result?"✅":"-"}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}






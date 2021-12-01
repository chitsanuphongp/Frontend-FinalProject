import React, { useState, useEffect } from 'react'
import { listDate } from '../functions/listdate.js';
import { Card, Form, Row, Col, Button } from 'react-bootstrap'

const Checkprize = () => {

    const [datelist, setDate] = useState([])

    useEffect(() =>{
        loadData()
    },[])

    const loadData = () => {
        listDate()
            .then(res =>{
                setDate(res.data.response)
            }).catch(err => {
                console.log(err)
            })
    }
    console.log(datelist)

    return (
        <div className="container-md">
            <Card className="text-center container-sm" style={{ width: '90%', height: '60%', marginTop:'80px', marginBottom:'10px', borderRadius: '20px' }}>
                <Card.Body>
                    <h1>ตรวจผลรางวัล</h1>
                    <hr />
                    <Row className="d-flex justify-content-center">
                        <Col md="auto" className="text-start d-flex align-items-center"><h6>งวดประจำวันที่ : </h6></Col>
                        <Col md={5}><Form.Select aria-label="Default select example">
                            
                                {datelist.map((item,index)=>
                                    <option key={index} value={item.url}>{item.date}</option>
                                 )}
                                    
                            </Form.Select>
                        </Col>
                    </Row>
                    <Card className="container mt-3" style={{ width:'70%', borderRadius:'20px'}}>
                        <Card.Body>
                            <Row className="justify-content-center">
                                <Col md={5}><Form.Control type="text" maxlength="6" placeholder="กรอกเลขสลาก 6 หลัก"/></Col>
                                <Col md={3}><Button variant="success" type="submit" style={{ width:'150px' }}>ยืนยัน</Button></Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Card.Body>
            </Card>
            <Card className="text-center container-sm" style={{ width: '90%', height: '60%', marginTop:'40px', marginBottom:'10px', borderRadius: '20px' }}>
                <Card.Body>
                    <h1>ผลสลากกินแบ่งรัฐบาล</h1>
                    <hr />
                    <div className="d-flex justify-content-center">
                        <Form.Select className="text-center" aria-label="Default select example" style={{ width:'50%'}}>
                            
                            {datelist.map((item,index)=>
                                <option key={index} value={item.url}>{item.date}</option>
                             )}
                                
                        </Form.Select>
                    </div>
                    <Card className="mt-3" variant="dark">
                        <Card.Body>
                            <row>
                                <h2>รางวัลที่ 1</h2>
                            </row>
                        </Card.Body>
                    </Card>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Checkprize

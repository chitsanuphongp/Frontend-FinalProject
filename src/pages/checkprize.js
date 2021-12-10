import React, { useState, useEffect } from 'react'
import { listDate } from '../functions/listdate.js';
import { Card, Form, Row, Col, Button } from 'react-bootstrap'
import { useDispatch, useSelector} from 'react-redux';

const initialState = {
    id: '',
    userlotto: ''
}

const Checkprize = () => {

    const [datelist, setDate] = useState([])
    const [lotto, setLotto] = useState(initialState);
    const dispatch = useDispatch();
    const { checkprize } = useSelector((state) => ({...state}));

    useEffect(() =>{
        loadDate()
    },[])

    useEffect(() => {}, [lotto]);

    const loadDate = () => {
        listDate()
            .then(res =>{
                setDate(res.data.response)
            }).catch(err => {
                console.log(err)
            })
    }

    const checkInput = e => {
        const {name,value} = e.target;

        setLotto({ ...lotto,[name]: value });

    }
    console.log(lotto)

    const Onclick = async (e) => {
        e.preventDefault();

        const res = await fetch("http://localhost:8080/api/lotto/check", {
            crossDomain: true,
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(
                lotto
            )
        })
        const data = await res.json();
        console.log(data);

        dispatch({
            type:'CHECK',
            payload: {
                message: data.data.message,
                prizename: data.data.prizename,
                reward: data.data.reward
            }
        })

        if(res.status === 400 || !data){
            console.log("Can't connect")
            window.alert("เชื่อมต่อไม่ได้")
        } else {
            console.log(data.data)
        }
    }

    return (
        <div className="container-md">
            <Card className="text-center container-sm" bg="light" border="light" style={{ width: '90%', height: '60%', marginTop:'220px', marginBottom:'220px', borderRadius: '20px' }}>
                <Card.Body>
                    <h1>ตรวจผลรางวัล</h1>
                    <hr />
                    <Row className="d-flex justify-content-center">
                        <Col md="auto" className="text-start d-flex align-items-center"><h6>งวดประจำวันที่ : </h6></Col>
                        <Col md={5}><Form.Select aria-label="Default select example" name="id" onChange={checkInput}>
                            
                                <option>กรุณาเลือกวันที่ต้องการ</option>
                                {datelist.map((item,index)=>
                                    <option key={index} value={item.id}>{item.date}</option>
                                 )}
                                    
                            </Form.Select>
                        </Col>
                    </Row>
                    <Card className="container mt-3" style={{ width:'70%', borderRadius:'20px'}}>
                        <Card.Body>
                            <Row className="justify-content-center">
                                <Col md={5}><Form.Control type="text" name="userlotto" value={lotto.userlotto} onChange={checkInput} maxLength="6" placeholder="กรอกเลขสลาก 6 หลัก"/></Col>
                                <Col md={3}><Button variant="success" type="submit" onClick={Onclick} style={{ width:'150px' }}>ยืนยัน</Button></Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card className="container mt-3" style={{ width:'70%', borderRadius:'20px'}}>
                        {checkprize && (
                            <Card.Body>
                                <h3>คุณ {checkprize.message}</h3>
                                {checkprize.prizename !== "" && (
                                    <h5>{checkprize.prizename} จำนวน {checkprize.reward} บาท</h5>
                                )}
                            </Card.Body>
                        )}
                    </Card>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Checkprize

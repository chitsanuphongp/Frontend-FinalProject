import React, { useState, useEffect } from 'react'
import { Card, Table } from 'react-bootstrap'
import { listHistory } from '../functions/listHistory.js'
import { useDispatch, useSelector} from 'react-redux';
import Moment from 'react-moment';


export default function History() {

    const [history, setHistory] = useState([])
    const { user } = useSelector((state) => ({...state}));

    useEffect(() =>{
        loadHistory()
    },[])

    const loadHistory = () => {
        listHistory(user.id)
            .then(res =>{
                setHistory(res.data.data)
                console.log(history)
            })
            .catch(err => {
                console.log(err)
                setHistory([])
            })
    }

    return (
        <div className="container-md d-flex justify-content-center">
            <Card className="text-center container-sm" bg="light" style={{ borderRadius: '20px' }}>
            <Card.Body className="container-md">
            <h2>ประวัติการสั่งซื้อ</h2>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>เลขที่ซื้อ</th>
                        <th>จำนวน</th>
                        <th>วันที่</th>
                    </tr>
                </thead>
            <tbody>

                {history.map((x)=>
                    <tr>
                    <td style={{ width:'40%'}}>{x.number}</td>
                    <td style={{ width:'20%'}}>{x.amount}</td>
                    <td style={{ width:'40%'}}><Moment date= {x.date} /></td>
                    </tr>
                )}

            </tbody>
            </Table>
            </Card.Body>
            </Card>
        </div>
    )
}

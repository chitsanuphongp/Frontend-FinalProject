import React from 'react'
import { Card } from 'react-bootstrap'
import Lotto from '../components/lotto.js';

export default function Lotterylist() {
    return (
        <div className="container-md d-flex justify-content-center" bg="light" border="light"  style={{ marginTop:'80px', marginBottom:'10px', borderRadius: '20px' }}>
            <Card className="text-center container-sm" bg="light" border="light" style={{ borderRadius: '20px' }}>
                <Card.Body>
                <h1>รายการสลากกินแบ่งรัฐบาล</h1>
                    <Lotto />
                </Card.Body>
            </Card>
        </div>
    )
}

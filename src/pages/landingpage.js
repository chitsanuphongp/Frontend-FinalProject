import React from 'react'
import { Row, Container, Button } from 'react-bootstrap'


export default function landingpage() {

    return (
        <div className="container-md">
            <Container>
                <Row className="align-items-center" style={{ height: '590px' }}>
                    <div className="col-6 align-items-center" style={{ }}>
                        <h1>LOTTO TH</h1>
                        <p>
                            เว็บขายสลากกินแบ่งรัฐบาลในแพลตฟอร์มออนไลน์
                            ซื้อง่าย ไม่ต้องเดินทาง
                        </p>
                        <Button variant="success">เลือกดูสลาก</Button>
                    </div>
                    <div className="col-6 container-sm">
                        <img src="images/pic_landing.png" alt="LottoTH" style={{ width:'90%' }}></img>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

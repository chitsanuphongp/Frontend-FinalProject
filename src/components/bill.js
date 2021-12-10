import React, {useState} from 'react'
import { Row, Col, Modal, Button } from 'react-bootstrap'
import { Buy } from '../functions/buy.js'

export default function Bill({lotto,onClick}) {
    
    const [show, setShow] = useState(true);

    const handleClick = () => {
        setShow(false);
        onClick();

    }

    const buylotto = async () => {
        const token = localStorage.getItem('token');
        const req = {
            number: lotto.number,
            amount: 1
            } 
            console.log('req',req)
        await Buy(req,token)
        .then((res) => {
            console.log(res.data)
            window.location.reload();
          })
          .catch((err) => {
            console.error(err)
          })
    }

    return (
      <Modal show={show}
            backdrop="static"
            keyboard={false}
            centered>
        <Modal.Header>
          <Modal.Title><h2>สรุปยอด</h2></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Row className="text-center">
            <Col>เลขที่ซื้อ</Col>
            <Col>จำนวน</Col>
        </Row>
        <Row className="text-center">
            <Col>{lotto.number}</Col>
            <Col>1</Col>
        </Row>
        <hr/>
        <h5 className="text-end">รวมทั้งสิ้น {lotto.price} บาท</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClick} variant="secondary">
            ยกเลิก
          </Button>
          <Button onClick={buylotto} variant="primary">
            ยืนยันการสั่งซื้อ
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

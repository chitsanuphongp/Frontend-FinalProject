import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

export default function RequireLogin() {

    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);

    return (
        <div>
            <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            centered
        >
        <Modal.Header>
          <Modal.Title>แจ้งเตือน</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          กรุณาเข้าสู่ระบบก่อนทำการซื้อ
        </Modal.Body>
            </Modal>
        </div>
    )
}

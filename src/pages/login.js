import React from 'react'
import { Card, Form, Button } from 'react-bootstrap'

export default function login() {
    return (
        <div className="container-md d-flex justify-content-center">
            <Card className="text-center container-md" bg="dark" text="light" style={{ width: '40%', height: '60%', marginTop:'80px', marginBottom:'10px', borderRadius: '20px' }}>
            <Card.Body>
            <br />
            <Card.Title><h1>เข้าสู่ระบบ</h1></Card.Title>
            <br />
            <Form>
                <Form.Group className="mb-3" controlId="formBasicTel">
                    <Form.Label className="d-flex justify-content-start">เบอร์โทรศัพท์</Form.Label>
                    <Form.Control type="tel" placeholder="กรอกเบอร์โทรศัพท์" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="d-flex justify-content-start">รหัสผ่าน</Form.Label>
                    <Form.Control type="password" placeholder="กรอกรหัสผ่าน" />
                </Form.Group>
            </Form>
            <Button variant="success" style={{ width:"40%", marginBottom:10 }}>เข้าสู่ระบบ</Button>
            <br />
            <Button variant="outline-light" size="sm">ลืมรหัสผ่าน?</Button>
            <br/>
            <hr style={{ height:2 }}/>
            <p>ยังไม่มีบัญชีผู้ใช้?</p>
            <Button variant="warning" style={{ width:"40%", marginBottom:20 }} href="/register">สมัครสมาชิก</Button>
            <br />
            </Card.Body>
            </Card>
        </div>
    )
}

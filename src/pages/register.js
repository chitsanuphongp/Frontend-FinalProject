import React, {useState, useEffect} from 'react'
import { Card, Form, Button } from 'react-bootstrap'

const initialState = {
    name: '',
    lastname: '',
    phone: '',
    bday: '',
    pass: '',
    conpass: '',
}
const passVerificationError = {
    isLength: false,
    isNum: false,
    isUpper: false,
    isLower: false,
    conPass: false,
};

export default function Register() {

    const [newUser, setnewUser] = useState(initialState);
    const [passwordError, setPasswordError] = useState(passVerificationError);

    useEffect(() => {}, [newUser]);

    const handleOnChange = e => {
        const {name,value} = e.target;

        setnewUser({ ...newUser,[name]: value });

        if(name === "pass"){

            const isLength = value.length >= 8
            const isNum = /[0-9]|[a-z]|[A-Z]/.test(value)
            const isUpper= /[A-Z]/.test(value)
            const isLower= /[a-z]/.test(value)

            setPasswordError({ ...passwordError, isLength, isNum, isUpper, isLower });
        }

        if(name === "conpass") {
            setPasswordError({ ...passwordError, conPass: newUser.pass === value });
            console.log("true");
        }
    }

    console.log(newUser);
    return (
        <div>
            <div className="container-sm d-flex justify-content-center">
            <Card className="text-center container-sm" bg="dark" text="light" style={{ width: '50%', height: '60%', marginTop:'80px', marginBottom:'10px', borderRadius: '20px' }}>
            <Card.Body>
            <br />
            <Card.Title><h1>สมัครสมาชิก</h1></Card.Title>
            <br />
            <Form>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label className="d-flex justify-content-start">ชื่อ</Form.Label>
                <Form.Control type="text" name="name" value={newUser.name} onChange={handleOnChange} placeholder="กรอกชื่อ" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formLastName">
                <Form.Label className="d-flex justify-content-start">นามสกุล</Form.Label>
                <Form.Control type="text" name="lastname" value={newUser.lastname} onChange={handleOnChange} placeholder="กรอกนามสกุล" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label className="d-flex justify-content-start">เบอร์โทรศัพท์</Form.Label>
                <Form.Control type="tel" name="phone" value={newUser.phone} onChange={handleOnChange} placeholder="กรอกเบอร์โทรศัพท์" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBday">
                <Form.Label className="d-flex justify-content-start">วัน/เดือน/ปีเกิด</Form.Label>
                <Form.Control type="date" name="bday" value={newUser.bday} onChange={handleOnChange} placeholder="กรอกนามสกุล"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label className="d-flex justify-content-start">รหัสผ่าน</Form.Label>
                    <Form.Control type="password" name="pass" value={newUser.pass} onChange={handleOnChange} placeholder="กรอกรหัสผ่าน" />
            </Form.Group>
            <ul className="text-start">
                <li className={passwordError.isLength ? 'text-success' : 'text-danger'}>ต้องมีความยาวอย่างน้อย 8 ตัว</li>
                <li className={passwordError.isNum ? 'text-success' : 'text-danger'}>ต้องประกอบไปด้วยตัวเลขและตัวอักษร</li>
                <li className={passwordError.isUpper ? 'text-success' : 'text-danger'}>ต้องมีตัวอักษรพิมพ์ใหญ่อย่างน้อย 1 ตัว</li>
                <li className={passwordError.isLower ? 'text-success' : 'text-danger'}>ต้องมีตัวอักษรพิมพ์เล็กอย่างน้อย 1 ตัว</li>
            </ul>
            <Form.Group className="mb-3" controlId="formConPassword">
                    <Form.Label className="d-flex justify-content-start">ยืนยันรหัสผ่าน</Form.Label>
                    <Form.Control type="password" name="conpass" value={newUser.conpass} onChange={handleOnChange} placeholder="ยืนยันรหัสผ่าน" />
            </Form.Group>
            </Form>
            <br />
            <Button variant="warning" style={{ width:"40%", marginBottom:20 }} disabled={Object.values(passwordError).includes(false)} href="/register">สมัครสมาชิก</Button>
            </Card.Body>
            </Card>
            </div>
        </div>
    )
}

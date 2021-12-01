import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { Card, Form, Button } from 'react-bootstrap'

const initialState = {
    username: '',
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    pass: '',
    conpass: '',
}
const passVerificationError = {
    isLength: false,
    isNum: false,
    isUpper: false,
    isLower: false,
    conPass: false
};

export default function Register() {

    const navigate = useNavigate();

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
        }
        console.log("log error",passwordError)
    }


    const OnClick = async (e) => {
        e.preventDefault();

        const { username, firstname, lastname, email, pass, phone } = newUser;
        const reqBody = {
            user_name: {
                firstname: firstname,
                lastname: lastname
            },
            user_username: username,
            user_password: pass,
            user_email: email,
            user_mobile: phone
        }
        const res = await fetch("http://127.0.0.1:8080/api/auth/register", {
            crossDomain: true,
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(
                reqBody
            )
        });
        const data = await res.json();

        if(data.status === 422 || !data){
            console.log("Invalid Registration")
            window.alert("ลงทะเบียนไม่สำเร็จ")
        } else {
            console.log("Successful Registration")
            window.alert("ลงทะเบียนสำเร็จ")
            navigate("/login");
        }
    }

    console.log(newUser);
    return (
        <div>
            <div className="container-md d-flex justify-content-center">
            <Card className="text-center container-sm" bg="dark" text="light" style={{ width: '60%', height: '60%', marginTop:'80px', marginBottom:'10px', borderRadius: '20px' }}>
            <Card.Body>
            <br />
            <Card.Title><h1>สมัครสมาชิก</h1></Card.Title>
            <br />
            <Form>
            <Form.Group className="mb-3" controlId="formUserName">
                <Form.Label className="d-flex justify-content-start">ชื่อผู้ใช้</Form.Label>
                <Form.Control type="text" name="username" value={newUser.username} onChange={handleOnChange} placeholder="กรอกชื่อผู้ใช้" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label className="d-flex justify-content-start">ชื่อ</Form.Label>
                <Form.Control type="text" name="firstname" value={newUser.firstname} onChange={handleOnChange} placeholder="กรอกชื่อ" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formLastName">
                <Form.Label className="d-flex justify-content-start">นามสกุล</Form.Label>
                <Form.Control type="text" name="lastname" value={newUser.lastname} onChange={handleOnChange} placeholder="กรอกนามสกุล" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label className="d-flex justify-content-start">เบอร์โทรศัพท์</Form.Label>
                <Form.Control type="tel" name="phone" value={newUser.phone} onChange={handleOnChange} placeholder="กรอกเบอร์โทรศัพท์" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label className="d-flex justify-content-start">อีเมล์</Form.Label>
                <Form.Control type="text" name="email" value={newUser.email} onChange={handleOnChange} placeholder="กรอกอีเมล์"/>
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
            <Button variant="warning" style={{ width:"40%", marginBottom:20 }} onClick={OnClick} disabled={Object.values(passwordError).includes(false)}>สมัครสมาชิก</Button>
            </Card.Body>
            </Card>
            </div>
        </div>
    )
}

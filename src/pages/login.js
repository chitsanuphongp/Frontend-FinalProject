import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Card, Form, Button } from 'react-bootstrap'

const initialState = {
    user_username: '',
    user_password: ''
}

export default function Login() {

    const navigate = useNavigate();

    const [newLogin, setLogin] = useState(initialState);

    useEffect(() => {}, [newLogin]);

    const handleOnChange = e => {
        const {name,value} = e.target;
    
        setLogin({ ...newLogin,[name]: value });
        console.log(newLogin)
    
    }
    
    const OnClick = async (e) => {
        e.preventDefault();
    
        const { user_username, user_password } = newLogin;

        const res = await fetch("http://127.0.0.1:8080/api/auth/login", {
            crossDomain: true,
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                user_username, user_password
            })
        });
        const data = await res.json();
    
        if(data.status === 422 || !data){
            console.log("Invalid Access")
            window.alert("เข้าสู่ระบบไม่สำเร็จ")
        } else {
            console.log("Successful Access")
            window.alert("เข้าสู่ระบบสำเร็จ")
            navigate("/lottery");
        }
    }

    return (
        <div className="container-md d-flex justify-content-center">
            <Card className="text-center container-md" bg="dark" text="light" style={{ width: '40%', height: '60%', marginTop:'80px', marginBottom:'10px', borderRadius: '20px' }}>
            <Card.Body>
            <br />
            <Card.Title><h1>เข้าสู่ระบบ</h1></Card.Title>
            <br />
            <Form>
                <Form.Group className="mb-3" controlId="formUser">
                    <Form.Label className="d-flex justify-content-start">ชื่อผู้ใช้</Form.Label>
                    <Form.Control type="text" name="user_username" value={newLogin.user_username} onChange={handleOnChange} placeholder="กรอกชื่อผู้ใช้" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label className="d-flex justify-content-start">รหัสผ่าน</Form.Label>
                    <Form.Control type="password" name="user_password" value={newLogin.user_password} onChange={handleOnChange} placeholder="กรอกรหัสผ่าน" />
                </Form.Group>
            </Form>
            <Button variant="success" style={{ width:"40%", marginBottom:10 }} onClick={OnClick}>เข้าสู่ระบบ</Button>
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

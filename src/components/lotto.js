import React, { useState, useEffect, useCallback } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap'
import { BsFillCartPlusFill } from "react-icons/bs";
import { useDispatch, connect } from 'react-redux';
import Bill  from '../components/bill.js'

const Lotto = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [modal, setModal] = useState(false);
    const [select, setSelect] = useState();
    let componentMounted = true;

    const dispatch = useDispatch();


    useEffect(() => {

        console.log("test");

        const getLotto = async () => {
            const token = localStorage.getItem('token');
            console.log(token);
            const res = await fetch("http://localhost:8080/api/lotto/get/all", {
            crossDomain: true,
            method: "GET",
            headers: { "Authorization": 'Bearer ' + token }
            });
            const response = await res.json();
            if (componentMounted){
                console.log(response.data);
                setData(await response.data);
                console.log(data);
                setFilter(await response.data);
            }

        }

        getLotto();

    }, []);

    const buylotto = (l) => {
        setModal(true);
        setSelect(l);
    }

    const handleClose = useCallback( async() => {
        console.log("close ja")
        setModal(false);

    }, []);

    const filterLotto = (cat) => {
        const updateList = data.filter((x)=>x.amount > cat);
        setFilter(updateList);

    }

    const ShowLotto = () => {

        return (
            <>
            <div className="button">
                <Button variant="outline-secondary" onClick={() => setFilter(data)}>ทั้งหมด</Button>{' '}
                <Button variant="outline-secondary" onClick={() => filterLotto("0")}>ที่เหลืออยู่</Button>{' '}
            </div>
            <Row md={4} className="align-items-center mt-3">
            {filter.map((lotto) => {
                return (
                    <Col>
                    <Card className="mt-3">
                    <Card.Body>
                    <Card.Title>
                        <Card bg="dark" text="light" className="pt-2" key={lotto.id}>
                            <h3>{lotto.number}</h3>
                        </Card>
                    </Card.Title>
                    <Card.Text variant="light">
                        <Row md={2}>
                            <Col>จำนวน : {lotto.amount}</Col>
                            <Col>ราคา : {lotto.price} บาท</Col>
                        </Row>
                        <Button 
                        variant="success" 
                        size="sm"
                        onClick={() => buylotto(lotto)}
                        className="mt-2" 
                        disabled={lotto.amount <= 0}
                        ><BsFillCartPlusFill style={{ margin:3 }}/>สั่งซื้อ</Button>
                    </Card.Text>
                    </Card.Body>
                    </Card>
                    </Col>
                    )
            })};
            </Row>
            </>
        );
    }

    return (
        <div className="row justify-content-center">
            <ShowLotto/>
            { modal ? ( <Bill lotto={select} onClick={handleClose}/> ) :null}
        </div>
    )

}

export default Lotto;
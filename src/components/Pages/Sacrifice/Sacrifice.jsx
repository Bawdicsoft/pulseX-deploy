import React, { useState, useEffect } from 'react';
import Navbarr from '../../Navbar/Navbar';
import { Container, Row, Form, Button } from 'react-bootstrap';
import { PulseXContract } from "../../Integration/Integration";
import { parseEther, formatEther } from "ethers/lib/utils";
import './Sacrifice.css'

console.log(PulseXContract);
const Sacrifice = () => {
    const [userDetail, setUserDetail] = useState();
    const [inputValues, setInputValues] = useState();



    // const userValue = {
    //     value: parseInt(userDetail.value._hex, 16)
    // }
    // console.log("ussssssssss", userValue.value);




    const userDetails = async () => {
        var counter = await PulseXContract.counter();
        var counterValue = parseInt(counter._hex, 16)
        // console.log("Counter Values", counterValue)
        let arr = []
        for (var i = 1; i <= counterValue; i++) {
            // console.log("hhhhhhhh", i);
            var details = await PulseXContract.getUserAndValue(i);

            details = { user: details.user, amount: details.value.toString() }
            arr.push({ ...details })
            // console.log("loooooooop", details);

        }
        setUserDetail(arr)
    }


    const submit = async (e) => {
        e.preventDefault()

        var inputValuesInString = inputValues.toString();
        console.log("inputValues", inputValuesInString);

        const tAmount = {
            value: parseEther(inputValues)
        }
        console.log(tAmount);

        await PulseXContract.submit(tAmount)
            .then(() => {
                alert('hello')
            }).catch((e) => console.log(e))
    }

    useEffect(() => {
        userDetails();
    }, []);


    return (<>
        <Navbarr />
        <Container id='home-container'>
            <h1>SACRIFICE</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse amet, odit aliquam cumque quis necessitatibus qui animi dolorem modi consequuntur!</p>
            <Row className='home-div'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        {/* <Form.Label>Address</Form.Label> */}
                        <div className='div-form'>
                            <Form.Control className='form-control' type="text" placeholder="value" onChange={(e) => setInputValues(e.target.value)} name="valueInEth" />
                            <Button onClick={submit} variant="primary" type="submit">
                                Submit
                            </Button>
                        </div>
                    </Form.Group>
                </Form>
            </Row>
            <Row className='home-div'>
                {userDetail?.map((d) => (
                    <div className='user-address'>
                        {/* <p>{d.user}</p> */}
                        <p>{d.user.slice(0, 8)} . . . {d.user.slice(-9)}</p>
                        <p>{formatEther(d.amount)}</p>
                    </div>
                ))}
            </Row>
        </Container>
    </>);
}

export default Sacrifice;
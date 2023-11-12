import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { useNavigate } from "react-router-dom";
import './Thankyou.scss';

const Thankyou = (props) => {

    const navigate = useNavigate();

    const goToDashboard = () => {
        navigate(`/`);
        //productContext.addProduct(obj);
        props.onGoToDashboard();
    };

    return (
        <>
            <div className="thank-form">

                <div className="card m-8">
                    <Card>
                        <p className="m-0 text-center">Thank you for the submission.</p>
                        <p className="mb-5 text-center">Click below to go back to the dashboard.</p>
                        <Button label="Go to Dashboard" className='save' onClick={goToDashboard} />
                    </Card>
                </div>

            </div>




        </>
    );
};

export default Thankyou;
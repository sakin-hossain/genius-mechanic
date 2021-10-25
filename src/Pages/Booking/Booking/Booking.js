import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const {serviceId} = useParams();
    const[service, setService] = useState()

    useEffect(()=>{
        fetch(`http://localhost:5000/services${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    return (
        <div>
            <h2>This is booking {serviceId}</h2>
            <h1>Details of {service.name}</h1>
        </div>
    );
};

export default Booking;
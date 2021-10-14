import React from 'react';
import { Link } from 'react-router-dom';
import notFound from "../../images/404.png";

const NotFound = () => {
    return (
        <div>
            <img className="w-100" src={notFound} alt="" />
            <Link to="/"><button className="btn btn-primary">Go-to Home</button></Link>
        </div>
    );
};

export default NotFound;
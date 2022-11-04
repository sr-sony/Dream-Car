import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const {title} = useLoaderData();
    return (
        <div>
            <p>{title}</p>
        </div>
    );
};

export default Checkout;
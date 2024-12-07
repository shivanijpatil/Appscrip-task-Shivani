
import React, { useContext } from 'react';
import { DataContext } from '../context/Dataprovider';


const FavPage = () => {
    const { cart } = useContext(DataContext);

    return (
        <>
            {cart.length > 0 ? (
                <div>
                    {cart.map((item, index) => (
                        <div key={index}>
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <div>
                    <img src="path_to_image" alt="Empty Cart" />
                    <p>Your cart is empty</p>
                </div>
            )}
        </>
    );
};

export default FavPage;

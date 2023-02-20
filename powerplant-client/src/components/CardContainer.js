import React, { useEffect, useState } from 'react';
import SingleCard from './SingleCard';
import AllProducts from '../../src/fakeData.json'

const CardContainer = () => {
    const [products, setProducts] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        setProducts(AllProducts);
    }, [])

    const adminEmail = "naimulkarimhredoy@gmail.com";
    const userEmail = `${localStorage.email}`

    return (
        <div>
            {
                (adminEmail == userEmail) ?
                    <div className="productContainer">
                        <h2 className='p-3'>All User Information</h2>
                        <input type="text"
                            style={{ width: '550px' }}
                            placeholder='Search with meter name...'
                            onChange={(e) => setQuery(e.target.value)}
                        />

                        <div className='container mt-3'>
                            <div className='row ml-2'>
                                {
                                    products.filter(pr =>
                                        pr.meterName.toLowerCase().includes(query)).map(product => <SingleCard product={product} key={product.meterName}></SingleCard>)
                                }

                            </div>
                        </div>
                    </div>
                    : 
                    <div className='container mt-3'>
                    <div className='row ml-2'>
                        {
                            products.filter(pr =>
                                pr.email.toLowerCase().includes(userEmail)).map(product => <SingleCard product={product} key={product.meterName}></SingleCard>)
                        }

                    </div>
                </div>
            }
        </div>
    );
};

export default CardContainer;

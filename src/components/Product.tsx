import React, { useState } from 'react';
import { products } from '../data/products';
import { Iproduct } from '../models';

interface ProductProps {
    product: Iproduct
}
export function Product({ product }: ProductProps) {
    const [details, setDetails] = useState(false);
    const btnBbClassName = details ? 'bg-yellow-400' : 'bg-blue-400';
    const btnClasses = ['py-2 px-4 border', btnBbClassName];
    return (
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
            <img src={product.image} className="w-1/6" alt="123" />
            <p>{ product.title }</p>
            <p className="font-bold">{product.price}</p>
            <button onClick={() => setDetails(!details)} className={btnClasses.join(' ')}>
                {details ? 'Hide Details' : 'Show details'}
                </button>
            {details && <div>
                <p>{product.description}</p>
                <p>Rate: <span style={{fontWeight: 'bold'}}>{product.rating.rate}</span></p>
            </div>}
        </div>
    )
};
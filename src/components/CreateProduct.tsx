import axios from 'axios';
import React, {useState} from 'react';
import { Iproduct } from '../models';

const productData: Iproduct = {
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 42,
        count: 10
    }
};

interface CreateProductProps {
    onCreate: (product:Iproduct) => void
}

export function CreateProduct({onCreate}: CreateProductProps) {
    const [value, setValue] = useState('');
    const submitHandler = async(event: React.FormEvent) => {
        event.preventDefault();
        productData.title = value;
        const response = await axios.post<Iproduct>('https://fakestoreapi.com/products', productData);

        onCreate(response.data);
    }
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }
    return (
        <form onSubmit={submitHandler}>
            <input 
                type="text" 
                className=' bg-black/30 border py-2 px-4 mb-2 w-full outline-0'
                placeholder='Enter product title...'
                value={value}
                onChange={changeHandler}
             />
             <button type='submit' className=' hover:text-white py-2 px-4 border bg-yellow-400'>Create</button>
        </form>
    )
}
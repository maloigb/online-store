import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { Iproduct } from '../models';

export const useProducts = () => {
    const [products, setProducts] = useState<Iproduct[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    async function fetchProducts() {
      try {
      setLoading(true);
      const response = await axios.get<Iproduct[]>('https://fakestoreapi.com/products?limit=5');
      console.log(response.data);
      setProducts(response.data);
      setLoading(false);
      } catch (e) {
        setError("Ошибка в загрузке данных");
        setLoading(false);
      }
    }
    useEffect(() => {
      fetchProducts()
    }, []);

    return {
        products,
        loading,
        error,
    }
}
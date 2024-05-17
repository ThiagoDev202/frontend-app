import React, { useState, useEffect } from 'react';

const ProductFetcher = ({ render }) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsloading] = useState(true);

    useEffect(() => {
        fetchProducts().then((fetchedProducts) => {
            setProducts(fetchedProducts);
            setIsLoading(false);
        });
        }, []);
        if (isLoading) {
            return <div>Loading...</div>
        }
        return render(products);
};

export default ProductFetcher;

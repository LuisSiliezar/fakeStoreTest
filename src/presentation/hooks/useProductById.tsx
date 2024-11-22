import { productsDbfetcher } from '@config/adapters/http/products-db.adapter';
import { productByIdUseCases } from '@core/use-cases/products';
import { Product } from '@domain/entities/products.entity';
import { useEffect, useState } from 'react';

export const useProductsById = (productId: number) => {
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState<Product>();

    useEffect(() => {
        loadProduct();
    });

    const loadProduct = async () => {
        const productsData = await productByIdUseCases(productsDbfetcher, productId);
        setProduct(productsData);

        setLoading(false);
    };

    return {
        loading,
        product,
    };
};

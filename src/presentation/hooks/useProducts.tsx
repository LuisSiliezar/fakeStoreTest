import { productsDbfetcher } from '@config/adapters/http/products-db.adapter';
import { productsUseCases } from '@core/use-cases/products';
import { Product } from '@domain/entities/products.entity';
import { useEffect, useState } from 'react';

export const useProducts = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        initLoad();
    });

    const initLoad = async () => {
        const productsData = await productsUseCases(productsDbfetcher);
        setProducts(productsData);
        setLoading(false);
    };

    return {
        loading,
        products,
    };
};

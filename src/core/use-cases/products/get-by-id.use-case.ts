import { HttpAdapter } from '@config/adapters/http/http-adapter';
import { Product } from '@domain/entities/products.entity';
import { ProductMapper } from '@infrastructure/mappers/product.mapper';
import type { ProductsResponse } from '@infrastructure/interfaces/products-db.responses';

export const productByIdUseCases = async (fetcher: HttpAdapter, productId: number): Promise<Product> => {
    try {
        const productsResponse = await fetcher.get<ProductsResponse>(`/products/${productId}`);
        return ProductMapper.fromDBProductsResultToLocalEntity(productsResponse);
    } catch (error) {
        throw new Error(`Error fetching product by id: ${error}`);
    }
};

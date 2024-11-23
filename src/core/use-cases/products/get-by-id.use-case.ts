import { HttpAdapter } from '@config/adapters/http/http-adapter';
import { Product } from '@domain/entities';
import { ProductMapper } from '@infrastructure/mappers';
import type { ProductsResponse } from '@infrastructure/interfaces';

export const productByIdUseCases = async (fetcher: HttpAdapter, productId: number): Promise<Product> => {
    try {
        const productsResponse = await fetcher.get<ProductsResponse>(`/products/${productId}`);
        return ProductMapper.fromDBProductsResultToLocalEntity(productsResponse);
    } catch (error) {
        throw new Error(`Error fetching product by id: ${error}`);
    }
};

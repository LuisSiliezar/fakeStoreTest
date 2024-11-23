import { HttpAdapter } from '@config/adapters/http/http-adapter';
import { Product } from '@domain/entities/products.entity';
import { ProductMapper } from '@infrastructure/mappers';
import type { ProductsResponse } from '@infrastructure/interfaces';

export const productsUseCases = async (fetcher: HttpAdapter): Promise<Product[]> => {
    try {
        const productsResponse = await fetcher.get<ProductsResponse[]>('/products');
        return productsResponse.map((product: ProductsResponse) => ProductMapper.fromDBProductsResultToLocalEntity(product));
    } catch (error) {
        throw new Error(`Error fetching products: ${error}`);
    }
};

import { HttpAdapter } from '@config/adapters/http/http-adapter';
import { Products } from '@domain/entities/products.entity';
import { ProductsResponse } from '@infrastructure/interfaces/products-db.responses';
import { ProductMapper } from '@infrastructure/mappers/product.mapper';

export const productsUseCases = async (fetcher: HttpAdapter): Promise<Products[]> => {
    try {
        const productsResponse = await fetcher.get<ProductsResponse[]>('/products');
        return productsResponse.map((product: ProductsResponse) => ProductMapper.fromDBProductsResultToLocalEntity(product));
    } catch (error) {
        throw new Error(`Error fetching products: ${error}`);
    }
};

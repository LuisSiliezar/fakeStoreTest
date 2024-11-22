import { Products } from '@domain/entities';
import { ProductsResponse } from '@infrastructure/interfaces';

export class ProductMapper {
    static fromDBProductsResultToLocalEntity(products: ProductsResponse): Products {
        return {
            id: products.id,
            title: products.title,
            price: products.price,
            description: products.description,
            category: products.category,
            image: products.image,
            rating_value: products.rating.rate,
        };
    }
}

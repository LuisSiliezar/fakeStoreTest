import { User } from '@domain/entities';
import { UserResponse } from '@infrastructure/interfaces';

export class UserMapper {
    static fromDBUserResultToLocalEntity(user: UserResponse): User {
        return {
            id: user.id,
            username: user.username,
            email: user.email,
            name: `${user.name.firstname} ${user.name.lastname}`,
            phone: user.phone,
            city: user.address.city,
            street: user.address.street,
            zipcode: user.address.zipcode,
        };
    }
}

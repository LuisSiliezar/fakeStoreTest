import { HttpAdapter } from '@config/adapters/http/http-adapter';
import { UserMapper } from '@infrastructure/mappers';
import type { UserResponse } from '@infrastructure/interfaces';
import { User } from '@domain/entities';

export const userByIdUseCases = async (fetcher: HttpAdapter): Promise<User> => {
    try {
        // !NOTE: this id is static due to the fake store api
        const userResponse = await fetcher.get<UserResponse>('/users/1');
        return UserMapper.fromDBUserResultToLocalEntity(userResponse);
    } catch (error) {
        throw new Error(`Error fetching user by id: ${error}`);
    }
};

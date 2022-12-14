import { User } from "src/core/domain/entities/user.entities";

/**
 * Service of domain entitie {@link User}.
 * 
 * KAKOU Akrou Cedric
 */
export interface UserService{
    signIn(username: string, password:string): User;
}
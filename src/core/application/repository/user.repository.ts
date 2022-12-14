import { Observable } from "rxjs";
import { User } from "src/core/domain/entities/user.entities";

/**
 * Repository of domain entitie {@link User}.
 * 
 * KAKOU Akrou Cedric
 */
export interface UserRepository{
    signIn(username:string, password:string): Observable<User>;
}
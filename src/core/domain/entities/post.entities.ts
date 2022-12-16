import { Skill } from "../valueobjects/skill.value-object";
import { IEntity } from "./IEntity";
import { User } from "./user.entities";

/**
 * Entitie domain of Post.
 * 
 * KAKOU Akrou Cedric
 */
export interface Post extends IEntity{
    content: string;
    date: Date;
    metadatas: Skill[];
    comments: Post[];
    likes: User[];
    shares: User[];
}
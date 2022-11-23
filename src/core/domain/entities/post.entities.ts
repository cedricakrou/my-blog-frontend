import { Skill } from "../valueobjects/skill.value-object";
import { User } from "./user.entities";

/**
 * Entitie domain of Post.
 * 
 * KAKOU Akrou Cedric
 */
export class Post{
    id: string | undefined;
    content: string = "";
    date: Date | undefined;
    metadatas: Skill[] = [];
    comments: Post[] = [];
    likes: User[] = [];
    shares: User[] = [];
}
import { Skill } from "../valueobjects/skill.value-object";

/**
 * Entitie domain of Experience.
 * 
 * KAKOU Akrou Cedric
 */
export class Experience{
    id: string | undefined;
    label: string = "";
    skills: Skill[] = [];
}
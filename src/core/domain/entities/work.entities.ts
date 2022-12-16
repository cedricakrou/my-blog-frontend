import { Skill } from "../valueobjects/skill.value-object";
import { IEntity } from "./IEntity";
import { ServiceEntity } from "./service.entities";

export interface WorkEntity extends IEntity {
    title: string;
    description: string;
    images: string[];
    skills: Skill[];
    service: ServiceEntity;
}
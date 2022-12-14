import { Skill } from "../valueobjects/skill.value-object";
import { EmploymentType } from "../valueobjects/employment-type.value-object";
import { Task } from "../valueobjects/task.value-object";
import { IEntity } from "./IEntity";

/**
 * Entitie domain of Experience.
 * 
 * KAKOU Akrou Cedric
 */
export interface Experience extends IEntity{
    title: string;
    description: string;
    employmentType: EmploymentType;
    order: number;
    companyName: string;
    companyLink: string;
    companyImageUrl: string;
    location: string;
    startDate: string;
    startEnd: string;
    isCurrentlyWorking: boolean;
    skills: Skill[];
    tasks: Task[];
}
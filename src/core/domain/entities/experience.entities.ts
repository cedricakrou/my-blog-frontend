import { Skill } from "../valueobjects/skill.value-object";
import { EmploymentType } from "../valueobjects/employment-type.value-object";

/**
 * Entitie domain of Experience.
 * 
 * KAKOU Akrou Cedric
 */
export interface Experience{
    id: string;
    title: string;
    description: string;
    employmentType: EmploymentType;
    companyName: string;
    companyLink: string;
    location: string;
    startDate: Date;
    startEnd: Date;
    isCurrentlyWorking: boolean;
    skills: Skill[];
}
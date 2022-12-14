import { Experience } from "src/core/domain/entities/experience.entities";
import { IFakeData } from "./fake-data";
import { v4 as uuidv4 } from 'uuid';

export class ExperienceFakeData implements IFakeData<Experience>{

    public cinetpay : Experience = {
        id: uuidv4(),
        title: "Ingénieur Fullstack",
        description: "Ma principale mission est le redesign du système d'information.",
        companyName: "Cinetpay",
        companyLink: "https://cinetpay.com/",
        location: "Abidjan",
        startDate: new Date("01/03/2023"),
        startEnd: new Date("01/03/2023"),
        isCurrentlyWorking: true,
        skills: [],
        employmentType: {
           id: uuidv4(),
           label: "Full-time"
        }
    };

    public datas(): Experience[] {
        
        return [
            this.cinetpay
        ];
    }

}
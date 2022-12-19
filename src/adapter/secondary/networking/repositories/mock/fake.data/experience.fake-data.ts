import { Experience } from "src/core/domain/entities/experience.entities";
import { IFakeData } from "./fake-data";
import { v4 as uuidv4 } from 'uuid';

export class ExperienceFakeData implements IFakeData<Experience>{

    public cinetpay : Experience = {
        id: uuidv4(),
        title: "Ingénieur Fullstack",
        description: "Ma principale mission est le redesign du système d'information.",
        order: 1,
        companyName: "Cinetpay",
        companyLink: "https://cinetpay.com/",
        companyImageUrl: "logo-cinetpay.webp",
        location: "Abidjan",
        startDate: "Mars 2022",
        startEnd: "",
        isCurrentlyWorking: true,
        skills: [{
            id: uuidv4(),
            label: "Java"
        },
        {
            id: uuidv4(),
            label: "Kotlin"
        },
        {
            id: uuidv4(),
            label: "Microservices"
        },
        {
            id: uuidv4(),
            label: "DDD"
        },
        {
            id: uuidv4(),
            label: "TDD"
        }],
        tasks: [
            {
                text: "Write modern, performant, maintainable code for a diverse array of client and internal projects"
            },
            {
                text: "Write modern, performant, maintainable code for a diverse array of client and internal projects"
            },
            {
                text: "Write modern, performant, maintainable code for a diverse array of client and internal projects"
            }
        ],
        employmentType: {
           id: uuidv4(),
           label: "CDI"
        }
    };

    public b2i : Experience = {
        id: uuidv4(),
        title: "Ingénieur Etude et développement",
        description: "Conception et développement des solutions",
        order: 2,
        companyName: "Business Intelligence Intégration",
        companyLink: "http://b2i-solutions.com/",
        companyImageUrl: "b2i.png",
        location: "Abidjan",
        startDate: "Novembre 2019",
        startEnd: "Mars 2022",
        isCurrentlyWorking: false,
        skills: [{
            id: uuidv4(),
            label: "Java"
        },
        {
            id: uuidv4(),
            label: "Kotlin"
        },
        {
            id: uuidv4(),
            label: "Microservices"
        },
        {
            id: uuidv4(),
            label: "DDD"
        },
        {
            id: uuidv4(),
            label: "TDD"
        }],
        tasks: [
            {
                text: "Write modern, performant, maintainable code for a diverse array of client and internal projects"
            },
            {
                text: "Write modern, performant, maintainable code for a diverse array of client and internal projects"
            },
            {
                text: "Write modern, performant, maintainable code for a diverse array of client and internal projects"
            }
        ],
        employmentType: {
           id: uuidv4(),
           label: "CDI"
        }
    };

    public cergi : Experience = {
        id: uuidv4(),
        title: "Ingenieur logiciel",
        description: "Developpement de solution android & web.",
        order: 3,
        companyName: "Cergi Banking Services",
        companyLink: "http://www.cergibs.com/",
        companyImageUrl: "cergi.png",
        location: "Abidjan",
        startDate: "Fevrier 2019",
        startEnd: "Septembre 2019",
        isCurrentlyWorking: false,
        skills: [{
            id: uuidv4(),
            label: "Java"
        },
        {
            id: uuidv4(),
            label: "Kotlin"
        },
        {
            id: uuidv4(),
            label: "Microservices"
        },
        {
            id: uuidv4(),
            label: "DDD"
        },
        {
            id: uuidv4(),
            label: "TDD"
        }],
        tasks: [
            {
                text: "Write modern, performant, maintainable code for a diverse array of client and internal projects"
            },
            {
                text: "Write modern, performant, maintainable code for a diverse array of client and internal projects"
            },
            {
                text: "Write modern, performant, maintainable code for a diverse array of client and internal projects"
            }
        ],
        employmentType: {
           id: uuidv4(),
           label: "Stage"
        }
    };

    public veone : Experience = {
        id: uuidv4(),
        title: "Developpeur d'applications",
        description: "Developpement de solution android & web.",
        order: 4,
        companyName: "Veone technologies",
        companyLink: "https://www.veone.net/",
        companyImageUrl: "veone.png",
        location: "Abidjan",
        startDate: "Avril 2017",
        startEnd: "Septembre 2017",
        isCurrentlyWorking: false,
        skills: [{
            id: uuidv4(),
            label: "Java"
        },
        {
            id: uuidv4(),
            label: "Kotlin"
        },
        {
            id: uuidv4(),
            label: "Microservices"
        }],
        tasks: [
            {
                text: "Write modern, performant, maintainable code for a diverse array of client and internal projects"
            },
            {
                text: "Write modern, performant, maintainable code for a diverse array of client and internal projects"
            },
            {
                text: "Write modern, performant, maintainable code for a diverse array of client and internal projects"
            }
        ],
        employmentType: {
           id: uuidv4(),
           label: "Stage"
        }
    };

    public datas(): Experience[] {
        
        return [
            this.cinetpay,
            this.b2i,
            this.cergi,
            this.veone
        ];
    }

}
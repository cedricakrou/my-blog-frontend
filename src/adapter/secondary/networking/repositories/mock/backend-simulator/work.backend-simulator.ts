import { WorkEntity } from "src/core/domain/entities/work.entities";
import { ISimulator } from "./simulator";
import { v4 as uuidv4 } from "uuid";
import { ServiceSimulator } from "./service.backend-simulator";

export class WorkSimulator implements ISimulator<WorkEntity>{

    private dejpay: WorkEntity = {
        id: uuidv4(),
        title: "Djepay",
        description: "Developers can show information here about how their app collects and uses your data",
        images: ["djepay-1.png"],
        skills: [{
            id: uuidv4(),
            label : "Flutter",

        },
        {
            id: uuidv4(),
            label : "Spring Boot",

        },
    ],
        service: new ServiceSimulator().flutterDevelopment
    };

    private resistore: WorkEntity = {
        id: uuidv4(),
        title: "Resistore",
        description: "Developers can show information here about how their app collects and uses your data",
        images: ["resistore-1.jpg"],
        skills: [{
            id: uuidv4(),
            label : "Android Native"
        },
        {
            id: uuidv4(),
            label : "Php"
        }
    ],
        service: new ServiceSimulator().androidNatveDevelopment
    };

    private moneyAlert: WorkEntity = {
        id: uuidv4(),
        title: "Money Alert SSE",
        description: "Developers can show information here about how their app collects and uses your data",
        images: ["money-alert-1.png"],
        skills: [{
            id: uuidv4(),
            label : "Android Native"
        }
    ],
        service: new ServiceSimulator().androidNatveDevelopment
    };

    public datas(): WorkEntity[] {

        return [
            this.dejpay,
            this.resistore,
            this.moneyAlert
        ];
    }
}

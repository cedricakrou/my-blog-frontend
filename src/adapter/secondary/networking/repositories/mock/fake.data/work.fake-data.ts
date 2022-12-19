import { WorkEntity } from "src/core/domain/entities/work.entities";
import { IFakeData } from "./fake-data";
import { v4 as uuidv4 } from "uuid";
import { ServiceFakeData } from "./service.fake-data";

export class WorkFakeData implements IFakeData<WorkEntity>{
    
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
        service: new ServiceFakeData().flutterDevelopment
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
        service: new ServiceFakeData().androidNatveDevelopment
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
        service: new ServiceFakeData().androidNatveDevelopment
    };

    public datas(): WorkEntity[] {
        
        return [
            this.dejpay,
            this.resistore,
            this.moneyAlert
        ];
    }
}
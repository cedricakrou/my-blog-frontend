import { IEntity } from "src/core/domain/entities/IEntity";

export abstract class ISimulator<T extends IEntity>{
   public abstract datas(): T[];
}

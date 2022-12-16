import { IEntity } from "src/core/domain/entities/IEntity";

export abstract class IFakeData<T extends IEntity>{
   public abstract datas(): T[];
}
import { Color } from "../common/color";

export abstract class Button {

    // height
    protected width: number = 50;
    protected height: number = 50;

    // padding 
    protected paddingRight: number = 0;
    protected paddingLeft: number = 0;
    protected paddingTop: number = 0;
    protected paddingBottom: number = 0;

    // margin
    protected marginRight: number = 0;
    protected marginLeft: number = 0;
    protected marginTop: number = 0;
    protected marginBottom: number = 0;

    // color
    protected textColor: String = Color.black;
    protected backgroundColor: string = Color.black;


    abstract click() : void;
}
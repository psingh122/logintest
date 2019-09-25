import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { HelloWorldModel } from "./main-view-model";

let vm: HelloWorldModel = new HelloWorldModel();

export function sampleFunction(args: EventData){
    const page = <Page>args.object;
    page.bindingContext = vm;
}

export function showDialog(){
    vm.set('dialogShown',true);
}

import { Pipe } from '@angular/core';
import {PipeTransform} from "@angular/core";


@Pipe({name: 'firstCap'})
export class FirstCapatializePipe implements PipeTransform {

    transform(value:any) {
        if (value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
        return value;
    }

}
// import {Pipe} from "angular2/core";


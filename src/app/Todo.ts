import { ɵbypassSanitizationTrustResourceUrl } from "@angular/core"
let sno:number;
let title:string;
let desc:string;
let active:boolean;
export class Todo{
    sno!: number 
    title!: string 
    desc!: string 
    active!: boolean 
    constructor() {
        sno:0
        title:" "
        desc: " "
        active: true
    }
}
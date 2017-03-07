import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'login',
    templateUrl: './app.login.html',
    styleUrls: ['./app.component.css']
})
export class LoginComponent implements OnInit {
    currentName: string = "Nombre";
    constructor() { }

     @Output()
     onNameChange: EventEmitter<string> = new EventEmitter<string>();

    nameChange(){
        this.onNameChange.emit(this.currentName);
    }

    ngOnInit() { }
}
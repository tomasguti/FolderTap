import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
    selector: 'login',
    templateUrl: './app.login.html',
    styleUrls: ['./app.component.css']
})
export class LoginComponent implements OnInit {
    currentName: string = "";
    constructor(private localStorageService: LocalStorageService) { }

    hasEntered: boolean = false;
    @Output()
    onEnter: EventEmitter<boolean> = new EventEmitter<boolean>();

    @Output()
    onNameChange: EventEmitter<string> = new EventEmitter<string>();

    nameChange(){
        this.onNameChange.emit(this.currentName);
    }

    ngOnInit() {
        let name = this.localStorageService.get("name");
        if(name == null){
            this.currentName = "";
        }else{
            this.currentName = String(name);
        }
        this.nameChange();
    }

    onClick(){
        this.hasEntered = true;
        this.onEnter.emit(this.hasEntered);
        this.localStorageService.set("name", this.currentName);
    }
}
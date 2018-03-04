import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {


  constructor() { }

  ngOnInit() {}
  

 /* Property Bindings */
  public name="Saravanan";
  public siteURL=window.location.href;
  public isDisabled=false;
  
  /* Class Bindings */
  public successClass="text-success";
  public hasError=true;
  public isSpecial=true;
  public highLightColor="orange";
  
  public  messageClasses = {
  	"text-success":!this.hasError,
  	"text-danger":this.hasError,
  	"text-special":this.isSpecial
  }
   public titleStyles={
  	color:"blue",
  	fontStyle:"italic"
  }
  
   greetUser(){
  	return this.name;
  }
   
/* Event Binding */
 public greetingMsg="";
 onClick(){
 	console.log("Welcome to Event Bindings");
 	this.greetingMsg="Welcome to Code Evolution";
 }
 
 public onClickEvent(event){
 	console.log(event);
 	this.greetingMsg=event.type;
 }
 /* Template Bindings */
 public logMessage(event){
 	console.log(event);
 }
 
 /* Two Way Bindings */
 public nameTwoWay="";
 
 /* Structural Bindings */
 public displayName=true;
 public color="greensss";
 public colors =["red","blue","green","yellow"];
 
 /* Component Interaction ; parentData is input from AppComponent*/
 @Input('parentData') public  message; 
 @Output() public childEvent = new  EventEmitter();
 
 public fireEvent(){
 	console.log("Event triggered");
 	this.childEvent.emit('Hey!! This message is from child component');
 }
 
 /* Pipes */
 public pipeMsg="welcome to AngularJS5.0";
 public person={
 	"firstName":"John",
 	"lastName":"Doe"
 	}
 	
 public date = new Date();
}

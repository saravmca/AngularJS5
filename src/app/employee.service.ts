import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import {IEmployee} from './employee';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class EmployeeService {

 private _url:string ="/assets/employee.json";	
  constructor(private http:HttpClient) {}
  
  public getEmployeesHttp():Observable<IEmployee[]>{
  	return this.http.get<IEmployee[]>(this._url)
  				.catch(this.errorHandler);
  }
  
  
  public getEmployees(){
  	return [
	  	{"id":1,"name":"Andrew","age":30},
	  	{"id":2,"name":"Brandon","age":25},
	  	{"id":3,"name":"Christina","age":26},
	  	{"id":4,"name":"Elena","age":28},
	  	{"id":5,"name":"Saravanan","age":40}	
  	];
  }
	errorHandler(error:HttpErrorResponse){
		console.log(error.message); 
		return Observable.throw(error.message || "server Error");
	}
}

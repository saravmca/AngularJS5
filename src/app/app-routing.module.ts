import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeRoutingListComponent } from './employee-routing-list/employee-routing-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
	{path:'',redirectTo:'departments',pathMatch:'full'},
	{path:'departments',component:DepartmentListComponent},
	{path:'employees',component:EmployeeRoutingListComponent},
	{path:"**",component:PageNotFoundComponent}
	];

@NgModule({
	imports:[RouterModule.forRoot(routes)],
	exports:[RouterModule]
	})
	
export class AppRoutingModule{}
 /*
 	DepartmentListComponent,EmployeeRoutingListComponent must be imported in app-routing and app.module
 	to avoid duplicates export routinComponents to app.module.ts and export it in app.module
 */
 export const routingComponents=[EmployeeRoutingListComponent,DepartmentListComponent,PageNotFoundComponent];
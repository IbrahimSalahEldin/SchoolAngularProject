import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { CreateStudentComponent } from './components/admin/student/create-student/create-student.component';
import { EditStudentComponent } from './components/admin/student/edit-student/edit-student.component';
import { EditUserComponent } from './components/admin/user/edit-user/edit-user.component';
import { CreateUserComponent } from './components/admin/user/create-user/create-user.component';
import { StudentComponent } from './components/admin/student/student.component';
import { UserComponent } from './components/admin/user/user.component';
import { HomeComponent } from './components/teacher/home/home.component';
import { ClassComponent } from './components/teacher/class/class.component';
import { AbsenceComponent } from './components/teacher/absence/absence.component';
import { AuthComponent } from './components/auth/auth.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [

  {path:'admin',component:AdminComponent,children:
  [
  
   {path:'',component:DashboardComponent},
   {path:'student',component:StudentComponent},
   {path:'create/student',component:CreateStudentComponent},
   {path:'edit/student',component:EditStudentComponent},
   {path:'user',component:UserComponent},
   {path:'create/user',component:CreateUserComponent},
   {path:'edit/user',component:EditUserComponent},
   {path:'**',component:NotfoundComponent}
   
 ]},
 
 {path:'',component:TeacherComponent,children:
 [
   {path:'',component:HomeComponent},
   {path:'student',component:StudentComponent},
   {path:'class',component:ClassComponent},
   {path:'absence',component:AbsenceComponent},
   
   {path:'user',component:UserComponent},
   {path:'create/user',component:CreateUserComponent},
   {path:'edit/user',component:EditUserComponent},
   {path:'**',component:NotfoundComponent}
]},

  {path:'login',component:AuthComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

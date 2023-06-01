import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { CreateStudentComponent } from './components/admin/studentAdmin/create-student/create-student.component';
import { EditStudentComponent } from './components/admin/studentAdmin/edit-student/edit-student.component';
import { EditUserComponent } from './components/admin/user/edit-user/edit-user.component';
import { CreateUserComponent } from './components/admin/user/create-user/create-user.component';

import { StudentComponent } from './components/teacher/student/student.component';
import { UserComponent } from './components/admin/user/user.component';
import { HomeComponent } from './components/teacher/home/home.component';
import { ClassComponent } from './components/teacher/class/class.component';
import { AbsenceComponent } from './components/teacher/absence/absence.component';
import { AuthComponent } from './components/auth/auth.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SidenavComponent } from './components/admin/dashboard/sidenav/sidenav.component';
import { AdminhomeComponent } from './components/admin/dashboard/adminhome/adminhome.component';
import { HeaderAdminComponent } from './components/admin/dashboard/header-admin/header-admin.component';
import { BoardComponent } from './components/admin/dashboard/board/board.component';
import { StudentAdminComponent } from './components/admin/student-admin/student-admin.component';
const routes: Routes = [

  {path:'admin',component:AdminComponent,children:
  [
   {path:'',component:AdminhomeComponent},
   {path:'student',component:StudentAdminComponent},
   {path:'create/student',component:CreateStudentComponent},
   {path:'edit/student',component:EditStudentComponent},
   {path:'user',component:UserComponent},
   {path:'create/user',component:CreateUserComponent},
   {path:'edit/user',component:EditUserComponent},
   {path:'sidnav',component:SidenavComponent},
   {path:'Adminhome',component:AdminhomeComponent},
   {path:'headerAdmin',component:HeaderAdminComponent},
   {path:'Dashboard',component:BoardComponent},

   {path:'**',component:NotfoundComponent}
   
 ]},


 {path:'Teacher',component:TeacherComponent,children:
 [
   {path:'',component:HomeComponent},
   {path:'student',component:StudentComponent},
   {path:'class',component:ClassComponent},
   {path:'absence',component:AbsenceComponent},
   
]},
  {path:'',component:AuthComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

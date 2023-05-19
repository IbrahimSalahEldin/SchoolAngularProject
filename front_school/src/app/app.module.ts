import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { HomeComponent } from './components/teacher/home/home.component';
import { CreateUserComponent } from './components/admin/user/create-user/create-user.component';
import { EditUserComponent } from './components/admin/user/edit-user/edit-user.component';
import { UserComponent } from './components/admin/user/user.component';
import { StudentComponent } from './components/admin/student/student.component';
import { CreateStudentComponent } from './components/admin/student/create-student/create-student.component';
import { EditStudentComponent } from './components/admin/student/edit-student/edit-student.component';
import { AbsenceComponent } from './components/teacher/absence/absence.component';
import { ClassComponent } from './components/teacher/class/class.component';
import { AuthComponent } from './components/auth/auth.component';
import { LayoutComponent } from './components/teacher/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    CreateUserComponent,
    EditUserComponent,
    UserComponent,
    StudentComponent,
    CreateStudentComponent,
    EditStudentComponent,
    AbsenceComponent,
    ClassComponent,
    AuthComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

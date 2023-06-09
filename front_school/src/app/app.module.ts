import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { HomeComponent } from './components/teacher/home/home.component';
import { CreateUserComponent } from './components/admin/user/create-user/create-user.component';
import { EditUserComponent } from './components/admin/user/edit-user/edit-user.component';
import { UserComponent } from './components/admin/user/user.component';
import { StudentComponent } from './components/teacher/student/student.component';
import { CreateStudentComponent } from './components/admin/studentAdmin/create-student/create-student.component';
import { EditStudentComponent } from './components/admin/studentAdmin/edit-student/edit-student.component';
import { AbsenceComponent } from './components/teacher/absence/absence.component';
import { ClassComponent } from './components/teacher/class/class.component';
import { AuthComponent } from './components/auth/auth.component';
import { LayoutComponent } from './components/teacher/layout/layout.component';
import { AdminComponent } from './components/admin/admin.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HeaderComponent } from './components/teacher/layout/header/header.component';
import { FooterComponent } from './components/teacher/layout/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SidenavComponent } from './components/admin/dashboard/sidenav/sidenav.component';
import { AdminhomeComponent } from './components/admin/dashboard/adminhome/adminhome.component';
import { HeaderAdminComponent } from './components/admin/dashboard/header-admin/header-admin.component';
import { BoardComponent } from './components/admin/dashboard/board/board.component';
import { StudentAdminComponent } from './components/admin/student-admin/student-admin.component';
import { StudentDetailsComponent } from './components/teacher/student-details/student-details.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    CreateUserComponent,
    EditUserComponent,
    UserComponent,
    CreateStudentComponent,
    EditStudentComponent,
    AbsenceComponent,
    ClassComponent,
    AuthComponent,
    LayoutComponent,
    AdminComponent,
    TeacherComponent,
    NotfoundComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    AdminhomeComponent,
    HeaderAdminComponent,
    BoardComponent,
    StudentAdminComponent,
    StudentComponent,
    StudentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

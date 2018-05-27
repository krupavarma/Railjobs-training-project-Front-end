import { resetPasswordServices } from './services/resetPasswordService.services';
import { jobseekerforgotPasswordServices } from './services/jobseekerForgotPasswordService.services';
import { recruiterProfileServices } from './services/recruiter/recruiterProfileService.services';
import { appliedSeekersLogServices } from './services/recruiter/seekersListServices.service';
import { jobsAppliedLogServices } from './services/jobsAppliedLogService.services';
import { jobsAppliedService } from './services/jobsAppliedService.services';
import { jobseekerJobsListServices } from './services/jobseekerJobsListService.services';
import { recruiterAddJobLogServices } from './services/recruiter/recruiterAddJobLogServices.service';
// import { addJob } from './Entities/recruiterAddJob.entity';
import { recruiterAddJobServices } from './services/recruiter/recruiterAddjobService.services';
import { recruiterRegistrationServices } from './services/recruiter/recruiterRegistrationService.services';
import { recruiterLoginServices } from './services/recruiter/recruiterLoginService.services';
import { jobseekerLoginServices } from './services/jobseekerLoginService.services';
import { jobseekerProfileServices } from './services/jobseekerprofileService.services';
import { jobseekerRegistrationServices } from './services/jobseekerRegistrationService.services';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SigninComponent } from './signin/signin.component';
import { JobseekerregistrationComponent } from './jobseekerregistration/jobseekerregistration.component';
import { RecruiterregistrationComponent } from './recruiterregistration/recruiterregistration.component';
import { RouterModule, Routes } from '@angular/router';
import { MatInputModule, MatSortable, MatPaginator } from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatChipsModule} from '@angular/material';
import {MatButtonToggleModule,MatIconModule} from '@angular/material';
import {FormsModule,Validators,FormControl,ReactiveFormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldControl,MatCheckboxModule} from '@angular/material';
import{routes} from './app.router';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule,MatPaginatorModule} from '@angular/material';
import { JobseekerdashboardComponent } from './jobseekerdashboard/jobseekerdashboard.component';
import { RecruiterdashboardComponent } from './recruiterdashboard/recruiterdashboard.component';
import {MatSortModule} from '@angular/material/sort';
import { JobseekerjoblistComponent } from './jobseekerjoblist/jobseekerjoblist.component';
import { JobseekerappliedlistComponent } from './jobseekerappliedlist/jobseekerappliedlist.component';
import { JobseekerprofileComponent } from './jobseekerprofile/jobseekerprofile.component';
import { RecruiterjobslistComponent } from './recruiterjobslist/recruiterjobslist.component';
import { JobseekerslistComponent } from './jobseekerslist/jobseekerslist.component';
import { RecruiterprofileComponent } from './recruiterprofile/recruiterprofile.component';
import {HttpModule} from '@angular/http';
import {MatDialogModule} from '@angular/material/dialog';
import { AddjobComponent } from './addjob/addjob.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    SigninComponent,
    JobseekerregistrationComponent,
    RecruiterregistrationComponent,
    JobseekerdashboardComponent,
    RecruiterdashboardComponent,
    JobseekerjoblistComponent,
    JobseekerappliedlistComponent,
    JobseekerprofileComponent,
    RecruiterjobslistComponent,
    JobseekerslistComponent,
    RecruiterprofileComponent,
    AddjobComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent
  ],
  imports: [
    BrowserModule,MatInputModule,MatButtonModule,MatButtonToggleModule,MatIconModule,FormsModule,MatFormFieldModule,
    
    BrowserAnimationsModule,MatTableModule,MatSortModule,MatCheckboxModule,MatPaginatorModule,MatSnackBarModule,
    RouterModule,MatDialogModule,
    routes,HttpModule,
    FlexLayoutModule,
    MatCardModule,ReactiveFormsModule
  
  ],
  //  exports:[MatTableDataSource],
  providers: [jobseekerRegistrationServices,jobseekerProfileServices,jobseekerLoginServices,recruiterLoginServices,
  recruiterRegistrationServices,recruiterAddJobServices,recruiterAddJobLogServices,jobseekerJobsListServices,jobsAppliedService,
jobsAppliedLogServices,appliedSeekersLogServices,recruiterProfileServices,jobseekerforgotPasswordServices,resetPasswordServices],
  bootstrap: [AppComponent]
})
export class AppModule { }

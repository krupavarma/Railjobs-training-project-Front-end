import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { AddjobComponent } from './addjob/addjob.component';
import { RecruiterprofileComponent } from './recruiterprofile/recruiterprofile.component';
import { RecruiterdashboardComponent } from './recruiterdashboard/recruiterdashboard.component';
import { JobseekerprofileComponent } from './jobseekerprofile/jobseekerprofile.component';
import { JobseekerappliedlistComponent } from './jobseekerappliedlist/jobseekerappliedlist.component';
import { JobseekerjoblistComponent } from './jobseekerjoblist/jobseekerjoblist.component';
import { JobseekerdashboardComponent } from './jobseekerdashboard/jobseekerdashboard.component';
import { SigninComponent } from './signin/signin.component';
import { RecruiterregistrationComponent } from './recruiterregistration/recruiterregistration.component';
import { JobseekerregistrationComponent } from './jobseekerregistration/jobseekerregistration.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {Routes,RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

export const router: Routes = [
    {path:'',redirectTo:'index',pathMatch:'full'},
    {path:'index',component:HeaderComponent,
    children:[
        { path: '', redirectTo: 'home', pathMatch: 'full' },    
        {path:'home',component:HomeComponent},
        {path:'signin',component:SigninComponent},
        {path:'jobseekerregistration',component:JobseekerregistrationComponent},
        {path:'recruiterregistration',component:RecruiterregistrationComponent}
        
    ]
    
    },
    {path:"jobseekerdashboard",component:JobseekerdashboardComponent,children:[
        {path:'jobseekerjoblist',component:JobseekerjoblistComponent},
        {path:'jobseekerappliedlist',component:JobseekerappliedlistComponent}
        
    ]},
    {path:'jobseekerprofile',component:JobseekerprofileComponent},
    {path:'recruiterprofile',component:RecruiterprofileComponent},
    {path:'recruiterdashboard',component:RecruiterdashboardComponent},
    {path:'recruiterdashboard/addjob',component:AddjobComponent},
    {path:'forgotpassword',component:ForgotpasswordComponent},
    {path:'reset',component:ResetpasswordComponent}


]

export const routes:ModuleWithProviders = RouterModule.forRoot(router)
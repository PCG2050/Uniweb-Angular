import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PersonalDetailsComponent } from './pages/personal-details/personal-details.component';
import { AcademicDetailsComponent } from './pages/academic-details/academic-details.component';
import { ProcessingFeePaymentComponent } from './pages/processing-fee-payment/processing-fee-payment.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { SignoutComponent } from './pages/signout/signout.component';
import { AdmissionFeePaymentComponent } from './pages/admission-fee-payment/admission-fee-payment.component';
import { Personaltab1Component } from './pages/personal-details/personaltab1/personaltab1.component';
import { Personaltab2Component } from './pages/personal-details/personaltab2/personaltab2.component';


export const routes: Routes = [
   {
     path: '',
     redirectTo: 'login',
     pathMatch: 'full'
   },
   {
    path: 'login',
    component: LoginComponent
   },
   {
    path:'',
    component:LayoutComponent,
    children:[
        {
            path: 'dashboard',
            component:DashboardComponent,
            title: 'Dashboard'
        },
        {
            path: 'personal-details',
            component: PersonalDetailsComponent,
            title: 'Applicant Details',
            children:[
                {
                    path:'tab1',
                    component: Personaltab1Component,
                    title: 'Tab 1'
                },
                {
                    path:'tab2',
                    component: Personaltab2Component,
                    title: 'Tab 2'
                },
                {
                    path:'',
                    redirectTo: 'tab1',
                    pathMatch: 'full' //default :tab1
                }
            ]
           
        },
        {
            path:'academic-details',
            component: AcademicDetailsComponent,
            title: 'Academic Details'
        },
        {
            path:'processing-fee-payment',
            component: ProcessingFeePaymentComponent,
            title: 'Processing Fee Payment'
        },
        {
            path:'admission-fee-payment',
            component: AdmissionFeePaymentComponent,
            title: 'Admission Fee Payment'
        },
        {
            path:'reports',
            component: ReportsComponent,
            title: 'Reports'
        },
        {
            path:'signout',
            component: SignoutComponent,
            title: 'Sign Out'
        }

    ]
   }
   

   
];


 
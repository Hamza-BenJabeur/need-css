import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerficationComponent } from './verfication/verfication.component';
import { SendRequestforVerificationComponent } from './send-requestfor-verification/send-requestfor-verification.component';
import { AdminVerificationComponent } from './admin-verification/admin-verification.component';
import { WaitingComponent } from './waiting/waiting.component';
import { LandingComponent } from './landing/landing.component';
import { CompanyRegisterComponent } from './company-register/company-register.component';
import { TrainingCenterRegisterComponent } from './training-center-register/training-center-register.component';
import { SendRequestCompanyComponent } from './send-request-company/send-request-company.component';
import { SendRequestCenterComponent } from './send-request-center/send-request-center.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { LoginCompaniesComponent } from './login-companies/login-companies.component';
import { RegisterCompaniesComponent } from './register-companies/register-companies.component';
import { TcsignupComponent } from './tcsignup/tcsignup.component';
import { LoginTcComponent } from './login-tc/login-tc.component';
import { StudentProfilComponent } from './student-profil/student-profil.component';
import { ProfileCompanyComponent } from './profile-company/profile-company.component';
import { ProfilTcComponent } from './profil-tc/profil-tc.component';
import { EditStudentProfileComponent } from './edit-student-profile/edit-student-profile.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { CompanyEditComponent } from './company-edit/company-edit.component';
import { FeedComponent } from './feed/feed.component';
import { PostCenterComponent } from './post-center/post-center.component';
import { PostComponent } from './post/post.component';
import { AdminPostsComponent } from './admin-posts/admin-posts.component';
import { TrainingCenterEditComponent } from './training-center-edit/training-center-edit.component';
import { PostComapnyComponent } from './post-comapny/post-comapny.component';
import { TcPostsComponent } from './tc-posts/tc-posts.component';
import { ModifyPostTcComponent } from './modify-post-tc/modify-post-tc.component';
import { PostsCompanyProfileComponent } from './posts-company-profile/posts-company-profile.component';
import { UpdateCompanyPostsComponent } from './update-company-posts/update-company-posts.component';
import { BanUsersComponent } from './ban-users/ban-users.component';
import { StudentFeedComponent } from './student-feed/student-feed.component';
import { NotificationComponent } from './notification/notification.component';
import { AdminWeeklyUpdateComponent } from './admin-weekly-update/admin-weekly-update.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { ReportsToAdminComponent } from './reports-to-admin/reports-to-admin.component';
import { AdminReportComponent } from './admin-report/admin-report.component'; 
import { PdfComponent } from './pdf/pdf.component';


const routes: Routes = [
  { path: 'register/student', component: VerficationComponent },
  { path: 'verification/request/student',component: SendRequestforVerificationComponent,},
  { path: 'admin', component: AdminVerificationComponent },
  { path: 'wait', component: WaitingComponent },
  { path: '', component: LandingComponent },
  { path: 'register/company', component: CompanyRegisterComponent },
  { path: 'register/center', component: TrainingCenterRegisterComponent },
  { path: 'verification/request/company',component: SendRequestCompanyComponent,},
  { path: 'verification/request/center',component: SendRequestCenterComponent,},
  { path: 'signup/student', component: StudentRegisterComponent },
  { path: 'signin/student', component: StudentLoginComponent },
  { path: 'signin/company', component: LoginCompaniesComponent },
  { path: 'signup/company', component: RegisterCompaniesComponent },
  { path: 'signin/center', component: LoginTcComponent },
  { path: 'signup/center', component: TcsignupComponent },
  { path: 'studentProfile', component: StudentProfilComponent },
  { path: 'company/profile', component: ProfileCompanyComponent },
  { path: 'center/profile', component: ProfilTcComponent },
  { path: 'editStudent', component: EditStudentProfileComponent },
  { path: 'resultSearch', component: SearchResultComponent },
  { path: 'editCompany', component: CompanyEditComponent },
  { path: 'feed', component: FeedComponent },
  { path: 'post/center', component: PostCenterComponent },
  { path: 'post', component: PostComponent },
  { path: 'admin/delete', component: AdminPostsComponent },
  { path: 'editTc', component: TrainingCenterEditComponent },
  { path: 'post/company', component: PostComapnyComponent },
  { path: 'post/center', component: PostCenterComponent },
  { path: 'own/posts', component: TcPostsComponent },
  { path: 'modify/tc/posts', component: ModifyPostTcComponent },
  { path: 'companyOwnPost', component: PostsCompanyProfileComponent },
  { path: 'updateCompPost', component: UpdateCompanyPostsComponent },
  { path: 'post/center', component: PostCenterComponent },
  { path: 'own/posts', component: TcPostsComponent },
  { path: 'admin/ban', component: BanUsersComponent },
  { path: 'feed/student', component: StudentFeedComponent },
  { path: 'notification', component: NotificationComponent },
  { path: 'admin/update', component: AdminWeeklyUpdateComponent },
  { path: 'admin/login', component: LoginAdminComponent },
  { path: 'sendReport' , component: ReportsToAdminComponent},
  { path: 'AdminReport', component: AdminReportComponent},
  { path: 'pdf', component: PdfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

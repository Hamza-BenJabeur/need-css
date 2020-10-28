import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}
  ROOT_URL = 'http://localhost:3000';

  //////////////// sign up /////////////////////
  registerCompanies(data) {
    return this.http.post(this.ROOT_URL + '/addCompany', data);
  }
  registerTC(data) {
    return this.http.post(this.ROOT_URL + '/addTC', data);
  }
  register(data) {
    return this.http.post(this.ROOT_URL + '/addStudents', data);
  }
  //////////////// LOG IN /////////////////////////
  loginStudent(data) {
    return this.http.post(this.ROOT_URL + '/login', data);
  }
  loginCompanies(data) {
    return this.http.post(this.ROOT_URL + '/loginCompanies', data);
  }
  loginTC(data) {
    return this.http.post(this.ROOT_URL + '/loginTC', data);
  }
  ///////////// REGISTER ///////////////////////
  httpRegister(obj) {
    return this.http.post(this.ROOT_URL + `/api/users/registration`, obj);
  }
  httpRegisterCompany(obj) {
    return this.http.post(this.ROOT_URL + `/api/users/registerCompany`, obj);
  }
  httpRegisterTrainingCenter(obj) {
    return this.http.post(
      this.ROOT_URL + `/api/users/registerTrainingCenter`,
      obj
    );
  }
  ////////////////// SEND VERIFICATION REQUESR //////////////////
  httpSendVerificationRequest(name) {
    return this.http.post(
      this.ROOT_URL + '/api/users/sendVerificationRequest',
      name
    );
  }

  httpSendVerificationRequestCompany(name) {
    return this.http.post(
      this.ROOT_URL + '/api/users/sendVerificationRequestCompany',
      name
    );
  }

  httpSendVerificationRequestCenter(name) {
    return this.http.post(
      this.ROOT_URL + '/api/users/sendVerificationRequestCenter',
      name
    );
  }
  /////////////////// GET NON VERIFIED /////////////////////
  httpGetNonVerifiedStudents() {
    return this.http.get(this.ROOT_URL + '/api/users/getNonVerifiedStudents');
  }

  httpGetNonVerifiedCompanies() {
    return this.http.get(this.ROOT_URL + '/api/users/getNonVerifiedCompanies');
  }

  httpGetNonVerifiedCenters() {
    return this.http.get(this.ROOT_URL + '/api/users/getNonVerifiedCenters');
  }
  //////////// VERIFY OR REJECT USER /////////////////////
  httpVerifyStudent(name) {
    return this.http.post(this.ROOT_URL + '/api/users/verifyStudent', name);
  }
  httprejectStudent(name) {
    return this.http.post(this.ROOT_URL + '/api/users/rejectStudent', name);
  }
  httpVerifyCompanies(name) {
    return this.http.post(this.ROOT_URL + '/api/users/verifyCompanies', name);
  }
  httprejectCompanies(name) {
    return this.http.post(this.ROOT_URL + '/api/users/rejectCompanies', name);
  }
  httpVerifyCenter(name) {
    return this.http.post(this.ROOT_URL + '/api/users/verifyCenter', name);
  }
  httprejectCenter(name) {
    return this.http.post(this.ROOT_URL + '/api/users/rejectCenter', name);
  }
  ///////////////////// GET SATATE OF USERS /////////////////////
  httpgetUserState(obj) {
    return this.http.post(this.ROOT_URL + '/api/users/getUsersatate', obj);
  }

  httpgetCompanyState(obj) {
    return this.http.post(this.ROOT_URL + '/api/users/getCompanysatate', obj);
  }

  httpgetCenterState(obj) {
    return this.http.post(this.ROOT_URL + '/api/users/getCentersatate', obj);
  }
  ///////////////////// GET PROFILS ///////////////////////////
  userProfil(obj) {
    return this.http.post(this.ROOT_URL + '/api/users/studentToken', obj);
  }
  compantProfil(obj) {
    return this.http.post(this.ROOT_URL + '/api/users/companyToken', obj);
  }
  tcProfil(obj) {
    return this.http.post(this.ROOT_URL + '/api/users/TcToken', obj);
  }
  // Upload iamge
  uploadImg(img) {
    return this.http.post(this.ROOT_URL + '/upload', img);
  }
  // upldate profile
  updateData(obj) {
    return this.http.post(this.ROOT_URL + '/api/users/Update', obj);
  }
  // find profile by name
  findProfil(str) {
    return this.http.post(this.ROOT_URL + '/api/users/findProfil', str);
  }
  // update profile
  updateCompanyData(obj) {
    return this.http.post(this.ROOT_URL + '/api/company/Update', obj);
  }
  // GET ALL POSTS
  httpGetPosts() {
    return this.http.get(this.ROOT_URL + '/api/posts');
  }
  // ADD POST BY CENTER
  httpAddPostCenter(obj) {
    return this.http.post(this.ROOT_URL + '/api/posts/addPost', obj);
  }
  /// DELETE POST
  httpdeletePost(obj) {
    return this.http.post(this.ROOT_URL + '/api/posts/delete', obj);
  }
  // UPDATE PROFILE
  updateTCData(obj) {
    return this.http.post(this.ROOT_URL + '/api/center/update', obj);
  }
  // ADD POST
  savePosts(obj) {
    return this.http.post(this.ROOT_URL + '/api/addPosts', obj);
  }
  // DELETE TRAINING CENTER POST
  httpdeletePostTc(obj) {
    return this.http.post(this.ROOT_URL + '/api/posts/deleteTc', obj);
  }
  //////////////////////// GET ALL USERS //////////////////////
  httpGetStudents() {
    return this.http.get(this.ROOT_URL + '/api/students');
  }
  httpGetCompanies() {
    return this.http.get(this.ROOT_URL + '/api/companies');
  }
  httpGetTrainingCenter() {
    return this.http.get(this.ROOT_URL + '/api/trainingCenters');
  }
  /////////////////////////////// BAN USERS /////////////////////////////////
  httpbanstudent(obj) {
    return this.http.post(this.ROOT_URL + '/api/users/ban/student', obj);
  }
  httpbancompany(obj) {
    return this.http.post(this.ROOT_URL + '/api/users/ban/company', obj);
  }
  httpbancenter(obj) {
    return this.http.post(this.ROOT_URL + '/api/users/ban/training', obj);
  }
  //find own company posts
  findCompanyPosts(obj) {
    return this.http.post(this.ROOT_URL + '/api/sreachByOwner', obj);
  }
  //delete posts inside company profile using owner
  deleteCompanyPosts(obj) {
    return this.http.post(this.ROOT_URL + '/api/rmCompanyPosts', obj);
  }
  //update posts from company profile
  updateCompanyPosts(obj) {
    return this.http.post(this.ROOT_URL + '/api/upCompanyPosts', obj);
  }
  //// GET TRAINING CENTERS POSTS
  httpgetTcPosts(obj) {
    return this.http.post(this.ROOT_URL + '/api/users/postsTc', obj);
  }
  /// UPDATE
  update(array) {
    return this.http.post(this.ROOT_URL + '/api/update', array);
  }
  //update company posts by id before modify
  postsToModify(obj) {
    return this.http.post(this.ROOT_URL + '/api/upCompanyPost', obj);
  }
  //// APPLY FOR A POST
  applystudent(obj) {
    return this.http.post(this.ROOT_URL + '/api/student/apply', obj);
  }
  // GET ALL APPLICATIONS
  httpGetApplications(obj) {
    return this.http.post(this.ROOT_URL + '/api/getNotification', obj);
  }
  //// ACCEPT APPLICATION OF STUDENT
  httpacceptApp(obj) {
    return this.http.post(this.ROOT_URL + '/api/acceptapply', obj);
  }
  // REJECT APPLICATION
  httpdeleteApplication(obj) {
    return this.http.post(this.ROOT_URL + '/api/deleteApply', obj);
  }
  //////// NUMBER OF POSTS AVAILBLE FOR TRAINING CENTER ////////////////
  getNumberOfPostavailble(obj) {
    return this.http.post(this.ROOT_URL + '/api/users/numberOfPosts', obj);
  }
  //////////////// UPDATE NUMBER OF POSTS ///////////////
  httpUpdateSilver() {
    return this.http.get(this.ROOT_URL + '/api/posts/weeklyPosts/siver');
  }
  httpUpdateGold() {
    return this.http.get(this.ROOT_URL + '/api/posts/weeklyPosts/gold');
  }
  httpUpdatePlat() {
    return this.http.get(this.ROOT_URL + '/api/posts/weeklyPosts/plat');
  }
  ////////////////////// UPGRADE TRAINING CENTER MEMBERSHIP /////////
  upgreadToPlat(obj) {
    return this.http.post(this.ROOT_URL + '/api/users/PlatMembership', obj);
  }
  upgreadToGold(obj) {
    return this.http.post(this.ROOT_URL + '/api/users/GoldMembership', obj);
  }
  //////////////////// handle the users report to admin //////////////////
  //save users report to db and get
  usersReport(obj) {
    return this.http.post(this.ROOT_URL + '/api/users/Reports', obj);
  }
  getUsersReport() {
    return this.http.get(this.ROOT_URL + '/api/admin/getReports');
  }
  deleteReports(obj) {
    return this.http.post(this.ROOT_URL + '/api/admin/delReports', obj);
  }
  deleteAllReports() {
    return this.http.delete(this.ROOT_URL + '/api/admin/delAllReports');
  }

  topdf(obj) {
    return this.http.post(this.ROOT_URL + '/api/pdf', obj);
  }
}

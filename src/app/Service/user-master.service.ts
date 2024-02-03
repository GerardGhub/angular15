import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserMasterService {

  constructor(private http: HttpClient) { }
  apiurl = 'https://localhost:44308/api/UserMaster';

  GetAllUser() {
    return this.http.get(this.apiurl);
  }

  GetUserbyId(UserId: any) {
    return this.http.get(this.apiurl + '/' + UserId);
  }

  RemoveUser(UserId: any) {
    return this.http.delete(this.apiurl + '/' + UserId);
  }

  UpdateUser(inputdata: any) {
    return this.http.post(this.apiurl + '/ActivateUser', inputdata);
  }


}

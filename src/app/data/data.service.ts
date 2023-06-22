import { Injectable } from '@angular/core';
import { UserSetting } from './user.setting';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getSubscriptionTypes():  Observable<string[]>{
    return of(['Monthly','Annual','Lifetime']);
  }

  postUserSettingsForm(userSetting: UserSetting) : Observable<any> {

    return this.http.post("https://putsreq.com/a9ytka7b3oKjN6H1Eom0", userSetting);
    // return of(userSetting);
  }
}

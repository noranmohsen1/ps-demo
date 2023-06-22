import { Component , OnInit } from '@angular/core';
import { UserSetting } from '../data/user.setting';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-setting-form',
  templateUrl: './user-setting-form.component.html',
  styleUrls: ['./user-setting-form.component.css']
})
export class UserSettingFormComponent implements OnInit {

  originalUserSetting : UserSetting = {
  name: '',
  emailOffers: false,
  interfaceStyle: '',
  subscriptionType: '',
  notes: ''

};
  userRating =0;
  maxRating=10;
  // startDate : Date;
  singleModel = "on";
  userSetting : UserSetting ={...this.originalUserSetting};
  postError = true;
  postErrorMessage= '' ;
  subscriptionTypes = Observable<string[]>;

 constructor(private dataService: DataService){}

 ngOnInit(){
  // this.subscriptionTypes =  this.dataService.getSubscriptionTypes();
  // this.startDate = new Date();
 }

 onBlur(field: NgModel){
   console.log("in Blur :", field.valid);

 }

 onHttpError(errorResponse: any){
  console.log("error:", errorResponse);
  this.postError = true;
  this.postErrorMessage = errorResponse.error.errorMessage;

 }


 onSubmit(form: NgForm){
   console.log("in onSubmit: ", form.value);
   if (form.valid) {
    this.dataService.postUserSettingsForm(this.userSetting).subscribe(
      result => console.log("success:", result),
      error => this.onHttpError(error)
    );
   }
   else{
     this.postError = true;
     this.postErrorMessage = "please fix the above errors"
   }

 }
}

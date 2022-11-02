import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private srv: EnrollmentService){}

  title = 'tdf';
  topics = ['Angular', 'React', 'Vue'];
  topicHasError = true;
  validateTopic(value: any) {
    if(value=='default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  OnSubmit() {
    console.log(this.userModel);
    this.srv.enroll(this.userModel).subscribe(
      data => console.log('Success !', data),
      error => console.error('Error !', error)
    )
  }

  userModel = new User('Bob','bob@test.com',66777777,'default','morning',true);
}

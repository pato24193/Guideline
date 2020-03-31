import {Component, OnInit} from '@angular/core';

declare let Email: any;

@Component({
  selector: 'app-mail-test',
  templateUrl: './mail-test.component.html',
  styleUrls: ['./mail-test.component.css']
})
export class MailTestComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit() {

    Email.send({
      Host: 'smtp.elasticemail.com',
      Username: 'pato24193@gmail.com',
      Password: 'BF0EACCC92ED7B83FB37927566D611A1EE16',
      To: 'startagain24193@gmail.com',
      From: 'pato24193@gmail.com',
      Subject: 'test mail',
      Body: '<i>This is sent as a feedback from my resume page.</i> <br/> <i>Link: http://localhost:4200/resetPassword/employeeId</i><br><br> <b>~End of Message.~</b> '
    }).then(message => {
      alert(message);
    });
  }
}

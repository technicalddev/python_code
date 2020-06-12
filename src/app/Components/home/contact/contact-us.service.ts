import 'src/assets/js/smtp.js';
declare let Email: any;

export class ContactUsService {
  constructor() {}
  sendMail(from: string, to: string, subject: string, content: string) {
    Email.send({
      Host: 'smtp.gmail.com',
      Username: from,
      Password: '1234moneytor',
      To: to,
      From: `udith.indrakantha@gmail.com`,
      Subject: subject,
      Body: content,
    })
      .then((message) => {
        alert(message);
      })
      .catch((err) => alert(`errro ====', ${err}`));
  }
}

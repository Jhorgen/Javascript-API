// import { apiKey } from './../.env';

export class DoctorInfo {
  searchForDoctors(nameInput, symptom) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${nameInput}&query=${symptom}&location=or-portland&skip=0&limit=100&user_key=1cc9d6cd76cce8d4188e897e5744d7dc`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}

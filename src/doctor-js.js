
export class DoctorNotes {
  generateNotes() {
    console.log(generateNotes);
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
       let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=1cc9d6cd76cce8d4188e897e5744d7dc`;
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




https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=1cc9d6cd76cce8d4188e897e5744d7dc

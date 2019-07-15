import { DoctorInfo } from "./doctor.js";
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){
  let doctorNotes = new DoctorInfo();
  $(".inputForm").submit(function(event){
    event.preventDefault();
    let nameInput = $('#nameInput').val();
    let symptom = $('#symptom').val();
    let Promise = doctorNotes.searchForDoctors(nameInput, symptom);
    Promise.then(function(response){
      let body = JSON.parse(response).data;
      console.log(body);
      if (body.length === 0 ) {
        $('.output').html("Invalid entry, please search again");
      } else {
        $('.output').html("<p>Your results are:</p>");
        body.forEach(function(searchThis){
          let nameSearch = searchThis.profile.first_name + ' ' + searchThis.profile.last_name + '<br>' + 'Name of practice:'  + ' ' + searchThis.practices[0].name;
          let symptomSearch = searchThis.profile.title + "<br>" + 'Info:' + ' ';
          if(searchThis.specialties[0]) {
            symptomSearch += searchThis.specialties[0].description
          }
          let docAddress = searchThis.practices[0].visit_address.street + ' ' +  searchThis.practices[0].visit_address.zip;
          $('.output').append(`<li> ${nameSearch} ${symptomSearch} <br> Address: ${docAddress}</li> <br>`);
        });
      }
    });
  });
});

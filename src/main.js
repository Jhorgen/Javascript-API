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
        $('.output').html("Please search again");
      } else {
        $('.output').html("Your results are:");
        body.forEach(function(searchThis){
          $('.output').append(`<li> ${searchThis.profile.bio}</li>`);
          });
      }
    });
  });
});

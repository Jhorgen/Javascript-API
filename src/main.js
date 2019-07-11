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

      body.forEach(function(searchThis){
        console.log(body);
        $('.output').append(`<li> ${searchThis.profile.bio}</li>`);

      });
    });
  });
});

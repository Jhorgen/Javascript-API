import { DoctorInfo } from "./doctor.js";
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

let doctorNotes = new DoctorInfo();

$(document).ready(function(){
  $('.nameForm').hide();
  $('.medForm').hide();
  $('.selectForm').change(function() {
    if ($(this).val() === 'name') {
      $('.nameForm').show();
      $('.medForm').hide();
    } else if ($(this).val() === 'medical') {
      $('.medForm').show();
      $('.nameForm').hide();
    }
  });

  $(".nameForm").submit(function(event){
    event.preventDefault();

    let nameInput = $('#nameInput').val();
    console.log(medicalInput);

    let namePromise = doctorNotes.searchByName(nameInput);
    namePromise.then(function(response) {
      let body = JSON.parse(response).data;
      console.log(body);
      $('.output').text(body);
    });
  });

  let medicalInput = $('#medicalInput').val();
  $(".medForm").submit(function(event){
    event.preventDefault();
    let medicalPromise = doctorNotes.searchByMedical(medicalInput);
    medicalPromise.then(function(response){
      let body = JSON.parse(response);
      console.log(body.data);

      $('.output').text(JSON.stringify(body));

    });
  });
});

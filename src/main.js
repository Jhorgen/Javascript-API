import { DoctorInfo } from "./doctor.js";
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

let doctorNotes = new DoctorInfo();

$(document).ready(function(){
  $(".inputForm").submit(function(event){
    event.preventDefault();

    // let nameInput = $('#nameInput').val();
    let medicalInput = $('#medicalInput').val();
    console.log(medicalInput);

    // let namePromise = doctorNotes.searchByName(nameInput);
    // namePromise.then(function(response) {
    //   let body = JSON.parse(response).data;
    //   console.log(body);
    //   $('.output').text(body);
    // });

      let medicalPromise = doctorNotes.searchByMedical(medicalInput);
      medicalPromise.then(function(response){
        let body = JSON.parse(response);
        console.log(body.data);
      });


    });
  });

import { DoctorNotes } from "./doctor-info.js";
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function(){
  $(".inputForm").submit(function(event){
    event.preventDefault();

    let newInput = $('#search').val();
    console.log(newInput);

    let doctorNotes = new DoctorNotes();
    let promise = doctorNotes.generateNotes(newInput);


    promise.then(function(response) {
      let body = JSON.parse(response);
      var keys = Object.values(body.meta);
      console.log(keys);
      $('.output').text(keys);

    });
  });
});

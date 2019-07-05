import { DoctorNotes } from "./doctor-js.js";
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function(){
  $(".inputForm").submit(function(event){
    event.preventDefault();

const newInput = $('#search').val();
console.log(newInput);


  });
});

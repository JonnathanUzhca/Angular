import { Component, OnInit } from '@angular/core';
import * as  firebase from 'firebase/app';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  titulo = 'Listado de Personas';

  constructor(private loginService: LoginService){

  }
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyAvsxPavKE_LAzkqG0ekoBMVJNQKLCU1bY",
      authDomain: "listado-personas-415d7.firebaseapp.com",
    })
  }
  
  isAutenticado(){
    return this.loginService.isAutenticado();

  }
  salir(){
    this.loginService.logout()
  }
}

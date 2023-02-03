import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from '@angular/fire/auth';
import { 
  addDoc,
  getDocs,
  Firestore,
  collection
} from '@angular/fire/firestore'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'master-draw';
  showFiller = false;
  public data: any = [];

  constructor(private http:HttpClient, public auth: Auth, public firestore: Firestore) { 
    this.getData();

  }

  addData(value: any) {
    const dbInstance = collection(this.firestore, 'users');
    addDoc(dbInstance, value)
    .then(() => {
      alert('Data Sent')
    })
    .catch((err) => {
      alert(err.message)
    })
  }

  getData() {
    const dbInstance = collection(this.firestore, 'users');
    getDocs(dbInstance)
    .then((response) => {
      this.data = [...response.docs.map((item) => {
        return { ...item.data(), id: item.id}
      })]
    })
  }

  handleRegister(value: any) {
    createUserWithEmailAndPassword(this.auth, value.email, value.password)
    .then((response: any) => {
      console.log(response.user)
      this.addData(value)
    })
    .catch((err) => {
      alert(err.message)
    })
  }

  handleLogin(value: any) {
    signInWithEmailAndPassword(this.auth, value.email, value.password)
    .then((response: any) => {
      console.log(response.user);
    })
    .catch((err) => {
      alert(err.message);
    })
  }

  

}

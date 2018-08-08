import { Component, OnInit, ViewChild } from '@angular/core';
import { ClientListItem } from '../../models/ClientListItem';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  item: ClientListItem = {
    name: '',
    email: '',
    age: 0,
    phoneNumber: 0,
    comments: ''
  };
  clientList: ClientListItem[];
  @ViewChild('form') form: NgForm; 

  constructor() { }

  ngOnInit() {
    this.clientList = [
      {
        id: 0,
        name: 'Lera',
        email: 'eklera0506@gmail.com',
        age: 31,
        phoneNumber: 80509450687,
        comments: 'Angular'
      },
    ];
  }

  onSubmit(form){

    if (form.invalid) return;

    const newItem: ClientListItem = {
      name: this.item.name,
      email: this.item.email,
      age: this.item.age,
      phoneNumber: this.item.phoneNumber,
      comments: this.item.comments,
      id: this.clientList.length
    };
    this.clientList.push(newItem);
    this.form.resetForm();
  }
 onFocus(input) {
   console.log(input);
 }

 deleteClient(index){
   this.clientList = this.clientList.filter(item => item.id !== index);
 }
}
// post method by using api in ionic get all data


import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { HttpClient, HttpErrorResponse } from '../../../node_modules/@angular/common/http';


@Component({
  selector: 'page-product',
  templateUrl: 'product.html'
})
export class ProductPage {
  obj;

//   your api
  url: string ="'https://jsonplaceholder.typicode.com/todos/1'";

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     private http: HttpClient,
     public appCtrl: App,   
    ) {        
        // getting data when page loads
        this.load();
  }
  
  

  load()
  {

    // simply define you api (Application Program Interface) in post method
    this.http.post(this.url,{
    headers: { 'Content-Type': 'application/json' }})
    .subscribe(res => { 
    // setting the result of that api or data of that api to obj    
    this.obj = res;
    console.log(res); 
    }, 
    (err: HttpErrorResponse) => { 
    if(err.status == 500){
    alert("Internal Server Error.Try Again");
    }
    });
  }
  
}
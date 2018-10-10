import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pe',
  templateUrl: './pe.component.html',
  styleUrls: ['./pe.component.css']
})
export class PeComponent implements OnInit {

    constructor(){
        this.welcome = "PRODUCT_LIST"

        this.products = null;
          var xhttp = new XMLHttpRequest();
          xhttp.open('POST', 'http://localhost:3100/fetchallproductdetails', false);
          xhttp.send();
          this.products = JSON.parse(xhttp.responseText);
    };       
      

  ngOnInit() {
  }

  delete=function(details)
{
  console.log(details);
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'http://localhost:3100/deletedb?product_code='+details['product_code'], false);
    xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhttp.send();
        location.reload();

}
  

  update=function(details)
{
   console.log(details);
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'http://localhost:3100/editdb?product_code='+details['product_code']+'&product_name='+details['product_name']+'&product_price='+details['product_price']+'&product_gst='+details['product_gst'], false);
    xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhttp.send();
        location.reload();
}
  onSubmit = function (details) {
    console.log(details);
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'http://localhost:3100/inserttodb?product_code=' + details['product_code'] + '&product_name=' + details['product_name'] + '&product_price=' + details['product_price'] + '&product_gst=' + details['product_gst'], false);
    xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhttp.send();
    location.reload();
  }
welcome=' PRODUCT_ENTRY';
    products : [{
        product_name: string,
        product_code : string,
        product_price:string;
        product_gst:string;
    }];

     
}

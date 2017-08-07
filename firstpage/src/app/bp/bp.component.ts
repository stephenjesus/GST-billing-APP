import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bp',
  templateUrl: './bp.component.html',
  styleUrls: ['./bp.component.css']
})
export class BpComponent implements OnInit {

 /*   constructor(){
        this.welcome = "PRODUCT_LIST"

        this.products = null;
          var xhttp = new XMLHttpRequest();
          xhttp.open('POST', 'http://localhost:3100/fetchallproductdetails', false);
          xhttp.send();
          this.products = JSON.parse(xhttp.responseText);
    }; */
        
        welcome=' PRODUCT_ENTRY';
    products : [{
        product_name: string,
        product_code : string,
        product_price:string;
        product_gst:string;
    }];

   ser=function(details)
   {
   console.log(details);
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'http://localhost:3100/searchdb?product_code='+details['product_code'], false);
    xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhttp.send();
    this.products=JSON.parse(xhttp.responseText);
    
   }
  onClickMe=function()
  {
    
  }

  ngOnInit() {
  }

}

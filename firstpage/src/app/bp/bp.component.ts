import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bp',
  templateUrl: './bp.component.html',
  styleUrls: ['./bp.component.css']
})
export class BpComponent implements OnInit {
  

  /* constructor(){
        this.welcome = "PRODUCT_LIST"

        this.products = null;
          var xhttp = new XMLHttpRequest();
          xhttp.open('POST', 'http://localhost:3100/fetchallproductdetails', false);
          xhttp.send();
          this.products = JSON.parse(xhttp.responseText);
    }; 
    */  




   sno = null;
   quantities = [];
    totals=[];
    fulltotal=0;
                      onEnter(sno: number, value: number)  { 
                        this.sno = sno;
                    this.quantities[sno] = value;  
  }

     
    settotal = function(sno: number, value: number){
    console.log(sno, value);
    this.totals[sno] = value;
    this.fulltotal = 0;
    for(var x in this.totals)
      {
      this.fulltotal += parseFloat(this.totals[x]);
    }
    //console.log(this.fulltotal);
  }
      
  
  welcome=' PRODUCT_ENTRY';
    products : [{
        product_name: string,
        product_code : string,
        product_price:string;
        product_gst:string;
    }];

  
   ser=function(details)
   {
   //console.log(details);

    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'http://localhost:3100/searchdb?product_code='+details['product_code'], false);
    xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhttp.send();
    if(this.products === undefined){
      this.products=JSON.parse(xhttp.responseText);
    }
    else{
      this.products = this.products.concat(JSON.parse(xhttp.responseText));
    }
    /*this.products = [{product_name: "x", product_code: "1", product_price: "5", product_gst: "5"},
                      {product_name: "y", product_code: "2", product_price: "3", product_gst: "4"}
  ];*/
    
   }
  onClickMe=function()
  {
    
  }

  ngOnInit() {
  }

}

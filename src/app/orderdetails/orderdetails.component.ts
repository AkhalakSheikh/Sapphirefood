import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material/Material module';
import { CommonModule } from '@angular/common';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-orderdetails',
  imports: [MaterialModule,CommonModule],
  templateUrl: './orderdetails.component.html',
  styleUrl: './orderdetails.component.scss'
})
export class OrderdetailsComponent implements OnInit {
  

  checkedtype1 = true;
  checkedtype2 = false;
  subtotal = 0;
  taxes = 0;
  total = 0;

  // orderitems = [{name:"Item Name",mrp:200,discount:20},{name:"Item Name",mrp:200,discount:20},{name:"Item Name",mrp:200,discount:20}]
  orderitems:any = [];
  adonitoms:any = [];


  constructor(private common:CommonService){

  }

  ngOnInit(){
    
    this.common.order.subscribe((order:any)=>{
        order.count = 1;
        let discount = (order.actualprice/100)*order.discount;
        order.mrp = order.mrp - discount;
        this.orderitems.push(order);
        this.calculateprice();
        console.log(this.orderitems);
    })

    this.common.adon.subscribe((adon:any)=>{
      adon.count = 1;
      let discount = (adon.actualprice/100)*adon.discount;
      adon.mrp = adon.mrp - discount;
      this.orderitems.push(adon);
      this.calculateprice();
      console.log(this.orderitems);
    })
  }

  increse(index:any){
    this.orderitems[index].count +=1;
    var dis = this.orderitems[index].actualprice - ((this.orderitems[index].actualprice/100)*this.orderitems[index].discount);
    this.orderitems[index].mrp += dis;
    this.calculateprice();
  }
  decrese(index:any){
    if(this.orderitems[index].count>1){
      this.orderitems[index].count -=1;
      var dis = this.orderitems[index].actualprice - ((this.orderitems[index].actualprice/100)*this.orderitems[index].discount); 
      this.orderitems[index].mrp -= dis;
      this.calculateprice();
    }
  }

  delete(index:any){
    this.orderitems.pop(index);
    this.calculateprice();
  }

  calculateprice(){
    this.subtotal = 0;
    this.taxes = 0;
    this.total = 0;
    this.orderitems.forEach((el:any)=>{
      this.subtotal += el.mrp;
      this.taxes = (this.subtotal/100)*18;
  })
  this.total = this.total + this.subtotal + this.taxes;
  }

}

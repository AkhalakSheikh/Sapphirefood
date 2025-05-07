import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { MaterialModule } from '../material/Material module';
import { CommonService } from '../services/common.service';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-subcategory',
  imports: [CommonModule, MaterialModule, FormsModule, NgxPaginationModule],
  templateUrl: './subcategory.component.html',
  styleUrl: './subcategory.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SubcategoryComponent implements OnInit {

  @Input() Itemsdata:any = [];
  data:any = [];
  addOnItoms:any = [];
  index = 0;
  isveg = false;
  isnonveg = false;
  all = true;
  startindex = 0;
  endindex = 10;
  subcatindex = 0;
  flag = false;
  flag1 = false;

  constructor(private common:CommonService){

  }

  ngOnInit(){
    this.common.index.subscribe((el:any)=>{
      this.index = el;
      this.data = this.Itemsdata[this.index].subCategories;
      this.addOnItoms = this.Itemsdata[this.index].addOnitoms;
      console.log(this.data)
    })
      this.data = this.Itemsdata[this.index].subCategories;
      this.addOnItoms = this.Itemsdata[this.index].addOnitoms;
      console.log(this.data)
    
  }

  setItom(item:any){
      this.common.setItomfororder(item);
  }

  setadon(item:any){
     this.common.setadonfororder(item);
  }

  next(){

    if(this.data[this.subcatindex].items[this.endindex]){
      this.data[this.subcatindex].ind += 1; 
      this.startindex += 10;
      this.endindex += 10;
      this. buttonactive();
      console.log(this.data[this.subcatindex].items[this.endindex]);
    }else{
      this.subcatindex +=1;
      this.startindex = 0;
      this.endindex = 10;
      this. buttonactive();
      console.log(this.data[this.subcatindex].items[this.endindex]);
    }
  }

  previous(){
    if(this.data[this.subcatindex].items[this.startindex] && this.startindex != 0){
      this.startindex -= 10;
      this.endindex -= 10;
      this. buttonactive();
      console.log(this.data[this.subcatindex].items[this.startindex]);
    }else{
        if(this.subcatindex > 0){
             if(this.endindex >= 10){
                this.subcatindex -=1;
                this.startindex = 10;
                this.endindex = 20;
                this. buttonactive();
             }else{
              this.subcatindex -=1;
              this.startindex = 0;
              this.endindex = 10;
              this. buttonactive();
             }
        console.log(this.data[this.subcatindex].items[this.startindex]);
        }
    
    }
  }

  buttonactive(){
    if(this.subcatindex == this.data.length-1 && !this.data[this.subcatindex].items[this.endindex]){
      this.flag = true;
    }else{
      this.flag = false;
    }
  }

toggle(){
  if(this.isveg == true){
    this.isnonveg = false;
    this.all = false;
  }
  if(this.isnonveg == true){
    this.all = false;
    this.isveg = false;
  }
  if(this.isnonveg != true && this.isveg != true){
    this.isnonveg = false;
    this.isveg = false;
    this.all = true;
  }
 
}

  

}

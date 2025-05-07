import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonService } from './services/common.service';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/Material module';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,MaterialModule,SubcategoryComponent,OrderdetailsComponent,ToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'SapphireFood';

  resources:any;
  labels = {};
  data:any = [];
  index = 0;

  constructor(public common:CommonService){

  }

  ngOnInit(){
    this.resources = this.common.getresources();
    this.labels = this.resources[0].labels;
    this.data = this.resources[0].data;
    console.log(this.labels);
    console.log(this.data);
  }

  checked(index:any){
    for(let i=0;i<this.data.length;i++){
       if(i == index){
        this.data[i].checked = true;
        this.common.setIndex(index);
       }else{
        this.data[i].checked = false;
       }
    }
  }

}

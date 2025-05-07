import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from"@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { NgxPaginationModule } from 'ngx-pagination';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
@NgModule({
    imports:[
     ReactiveFormsModule,
     MatInputModule,
     MatFormFieldModule,
     MatButtonModule,
     MatCardModule,
     MatDialogModule,
     MatToolbarModule,
     MatIconModule,
     MatDividerModule,
     NgxPaginationModule,
     MatSlideToggleModule,
     FormsModule
    ],
    exports:[
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatToolbarModule,
        MatIconModule,
        MatDividerModule,
        NgxPaginationModule,
        MatSlideToggleModule,
        FormsModule
    ],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class MaterialModule{

}
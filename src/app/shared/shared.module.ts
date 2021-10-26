import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';

import {ConfirmPopupModule} from 'primeng/confirmpopup';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonModule,
    TableModule,
    TooltipModule,

    ConfirmPopupModule,
    FormsModule
   
  ]


  
})
export class SharedModule { }

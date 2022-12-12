import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RatingModule } from 'primeng/rating';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  exports: [
    FormsModule,
    CommonModule,
    PanelModule,
    AccordionModule,
    ButtonModule,
    CardModule,
    ProgressSpinnerModule,
    TabViewModule,
    TooltipModule,
    TableModule,
    DataViewModule,
    ImageModule,
    ToastModule,
    DropdownModule,
    RatingModule,
    InputTextModule,
  ],
  imports: [CommonModule],
})
export class PrimeNgModule {}

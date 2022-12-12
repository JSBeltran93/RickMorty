import { NgModule } from '@angular/core';

import { SpinnerComponent } from './spinner/spinner.component';
import { PrimeNgModule } from '../primeng.module';

@NgModule({
  declarations: [SpinnerComponent],
  imports: [PrimeNgModule],
  exports: [SpinnerComponent],
})
export class SharedComponentsModule {}

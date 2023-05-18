import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollDirective } from './directive/scroll.directive';
import { FilterPipe } from './pipes/filter.pipe';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ScrollDirective,
    FilterPipe

  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }

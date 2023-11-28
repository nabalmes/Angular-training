import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { CustomersComponent } from './main/customers/customers.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { PipeExamplesComponent } from './pipe-examples/pipe-examples.component';
import { BirthdayPipe } from './shared/pipes/birthday.pipe';
import { AttributeDirectivesComponent } from './main/attribute-directives/attribute-directives/attribute-directives.component';
import { HoverHighlightDirective } from './shared/directives/hover-highlight.directive';
import { StucturalDirectivesComponent } from './main/stuctural-directives/stuctural-directives.component';
import { CustomerModule } from './customer/customer.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    CustomersComponent,
    FooterComponent,
    PipeExamplesComponent,
    BirthdayPipe,
    AttributeDirectivesComponent,
    HoverHighlightDirective,
    StucturalDirectivesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CustomerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

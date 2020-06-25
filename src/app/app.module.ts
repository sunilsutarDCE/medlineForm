import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/Header/header.component';
import { FooterComponent } from './shared/Footer/footer.component';
import { RegistrationComponent } from './Registration/registration.component';
import { ThankYouComponent } from './ThankYou/thankyou.component';
import { ModalInfoComponent } from './Registration/ModalInfo/modalInfo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegistrationComponent,
    ThankYouComponent,
    ModalInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents : [ModalInfoComponent]
})
export class AppModule { }

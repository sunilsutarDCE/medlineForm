import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './Registration/registration.component';
import { ThankYouComponent } from './ThankYou/thankyou.component';

const routes: Routes = [
  {
    path : "registration",
    component : RegistrationComponent
  },
  {
    path : "thankyou",
    component : ThankYouComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

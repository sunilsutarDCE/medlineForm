import { Component } from "@angular/core";
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: "app-header",
    template: ` <header>
    <a routerLink="/"><img src="../../../assets/img/medline-logo.png" alt="Medline" /></a>
    <a *ngIf="isHomePage" class="btn btn-primary float-right" routerLink="/registration">Click here to Register</a>
    <hr />
    <h1>MEDLINE.COM</h1>
    <h2 *ngIf="!isHomePage">Account Registration</h2><br />
  </header>`
})
export class HeaderComponent {
    isHomePage:Boolean = false;
    constructor(private router: Router)
    {
        this.router.events.subscribe((event)  => {
            if(event instanceof NavigationEnd) {
                if ( event.url == '/' || event.url=='/thankyou') {
                    this.isHomePage=true;
                }
                else{
                    this.isHomePage=false;
                }
            }
          });
       
    }
    
}
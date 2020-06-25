import { Component, OnInit, Input } from "@angular/core";
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector : "app-modal-info",
    templateUrl : "./modalInfo.template.html",
    styleUrls : ["./modalInfo.component.css"]
})
export class ModalInfoComponent implements OnInit
{
    @Input() regData;

    constructor(private router:Router,public activeModal: NgbActiveModal)
    {

    }

    ngOnInit()
    {

    }

    okClicked()
    {
        this.activeModal.close();
        this.router.navigateByUrl('thankyou');
    }
}

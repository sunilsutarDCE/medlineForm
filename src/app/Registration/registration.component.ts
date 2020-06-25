import { OnInit, Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ModalInfoComponent } from './ModalInfo/modalInfo.component';

@Component({
selector : "app-registration",
templateUrl : "./registration.template.html",
styleUrls : ['./registration.component.css']
})
export class RegistrationComponent implements OnInit
{
    registrationForm: FormGroup;
    submitClicked:Boolean=false;
    
    constructor(private modalService: NgbModal)
    {

    }

    ngOnInit()
    {
        this.registrationForm = new FormGroup({
            firstname: new FormControl('',Validators.required),
            lastname: new FormControl('',Validators.required),
            phone: new FormControl('',Validators.required),
            ext :  new FormControl(''),
            email :  new FormControl('',[Validators.required,Validators.email]),
          });
    }
    onSubmit(form:FormGroup)
    {
        if(form.invalid)
            this.submitClicked=true;
        else
        {
            this.submitClicked=false;
            const modalRef = this.modalService.open(ModalInfoComponent,
                {
                    backdrop  : 'static',
                    keyboard  : false
                }
            );
            modalRef.componentInstance.regData = form.value;
            form.reset();
        }
    }
}
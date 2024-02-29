import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';

@Component({
  selector: 'app-payment-details-from',
  templateUrl: './payment-details-from.component.html',
  styles: [
  ]
})
export class PaymentDetailsFromComponent {
  constructor(public service: PaymentDetailService, private toastr:ToastrService) { }

  onSubmit(form:NgForm) {
    this.service.formSubmitted = true
    if (form.valid) {
      if (this.service.formData.paymentDetailId == 0)
        this.InsertRecord(form)
      else
        this.UpdateRecord(form)

    }
  }

  InsertRecord(form:NgForm) {
    this.service.postPaymentDetail()
    .subscribe({
      next: res => {
        this.service.list = res as PaymentDetail[]
        this.service.resetForm(form)
        this.toastr.success('Inserted successfully', 'Payment Details Register')
      },
      error: err => {console.log(err)}})
  }

  UpdateRecord(form:NgForm) {
    this.service.putPaymentDetail()
    .subscribe({
      next: res => {
        this.service.list = res as PaymentDetail[]
        this.service.resetForm(form)
        this.toastr.info('Updated successfully', 'Payment Details Register')
      },
      error: err => {console.log(err)}})
  }

}

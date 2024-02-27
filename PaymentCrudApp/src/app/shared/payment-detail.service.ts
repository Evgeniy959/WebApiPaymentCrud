import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { PaymentDetail } from './payment-detail.model';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  url: string = "http://localhost:5041/api/PaymentDetail";
  list: PaymentDetail[] = [];
  formData: PaymentDetail = new PaymentDetail()

  constructor(private http: HttpClient) { }
  refreshList() {
    this.http.get(this.url).subscribe({next: res => {this.list = res as PaymentDetail[];},
  error: err => {console.log(err);}});
  }

  postPaymentDetail() {
    return this.http.post(this.url, this.formData)
  }

  resetForm(form:NgForm) {
    form.form.reset()
    this.formData = new PaymentDetail()
  }


}

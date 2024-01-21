import { Component, OnInit } from '@angular/core';
import { GlobalStoreService } from '../global-service/global-store.service';
import { formData } from '../global-service/formData.config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-page',
  templateUrl: './data-page.component.html',
  styleUrls: ['./data-page.component.scss']
})
export class DataPageComponent implements OnInit {

  constructor(private globalStore: GlobalStoreService,
    private router: Router) { }
  formData: Array<Array<any> > = [];
  formId: any; 
  ngOnInit(): void {
    this.updateFormData();
  }
  
  editForm(formData: any[]) {
    const id: string = formData[0];
    this.globalStore.FormId = id;
    this.router.navigateByUrl('/edit-form')
  }

  deleteRecord(formData: any[]) {
    const id = formData[0];
    this.globalStore.deleteRecord(id);
    this.updateFormData();
  }

  updateFormData() {
    this.formData = [];
    this.formId = this.globalStore.formIDs();
    this.formId.forEach((id: string, index:number) => {
      const form = this.globalStore.getformData(id);
      const data = [id, form.name, form.phoneNumber, form.dateOfBirth];
      this.formData.push(data);
    }); 
  }
}

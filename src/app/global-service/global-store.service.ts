import { Injectable } from '@angular/core';
import { formData } from './formData.config';

@Injectable({
  providedIn: 'root'
})


export class GlobalStoreService {
  
  formDataCollection: Record<string, formData> = {};
  selectedFormId: string = '';
  constructor() { }

  setformData(id: string, data: formData) {
    this.formDataCollection[id] = data;
  }
  getformData(id: string) {
    return this.formDataCollection[id];
  }

  displayData() {
    console.log(this.formDataCollection);
  }

  formIDs() {
    return Object.keys(this.formDataCollection);
  }
  
  deleteRecord(id: string) {
    delete this.formDataCollection[id];
  }

  set FormId(id: string) {
    this.selectedFormId = id;
  }

  get FormId() {
    return this.selectedFormId;
  }
}

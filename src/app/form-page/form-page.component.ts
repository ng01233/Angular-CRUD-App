import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalStoreService } from '../global-service/global-store.service';
import { formData } from '../global-service/formData.config';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {

  entryForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    gender: new FormControl('Male',[Validators.required]),
    address: new FormControl('',[Validators.required]),
    date: new FormControl('',[Validators.required]),
    college: new FormControl('',[Validators.required]),
    course: new FormControl('',[Validators.required]),
    fathersName: new FormControl('',[Validators.required]),
    mothersName: new FormControl('',[Validators.required]),
    phoneNumber: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required])
  });
  formId: string = '';
  constructor(private globalStore: GlobalStoreService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const urlPath = this.route.snapshot.url[0].path;
    if (urlPath === 'edit-form') {
      this.setForm()
    }
  }
  setForm() {
    this.formId = this.globalStore.FormId;
    const formData = this.globalStore.getformData(this.formId);
    this.entryForm.get('name')?.setValue(formData.name);
    this.entryForm.get('address')?.setValue(formData.address);
    this.entryForm.get('phoneNumber')?.setValue(formData.phoneNumber);
    this.entryForm.get('gender')?.setValue(formData.gender);
    this.entryForm.get('date')?.setValue(formData.dateOfBirth),
    this.entryForm.get('college')?.setValue(formData.collegeName);
    this.entryForm.get('fathersName')?.setValue(formData.fatherName);
    this.entryForm.get('mothersName')?.setValue(formData.motherName);
    this.entryForm.get('email')?.setValue(formData.email);
    this.entryForm.get('course')?.setValue(formData.courseName);  
  }
  onSubmit() {
    const uniqueId = this.formId === '' ? 'FD' + (new Date()).getTime() : this.formId;
    const formData: formData = {
      name: this.entryForm.get('name')?.value,
      address: this.entryForm.get('address')?.value,
      phoneNumber: this.entryForm.get('phoneNumber')?.value,
      gender: this.entryForm.get('gender')?.value,
      dateOfBirth: this.entryForm.get('date')?.value,
      collegeName: this.entryForm.get('college')?.value,
      fatherName: this.entryForm.get('fathersName')?.value,
      motherName: this.entryForm.get('mothersName')?.value,
      email: this.entryForm.get('email')?.value,
      courseName: this.entryForm.get('course')?.value
    } 
    
    this.globalStore.setformData(uniqueId, formData);
    this.entryForm.reset();
    alert(`Form date submitted with ID ${uniqueId}`);
    this.globalStore.displayData();
  }
  
  get name(){
    return this.entryForm.get('name');
  }
  
  get date() {
    return this.entryForm.get('date');
  }

  get address() {
    return this.entryForm.get('address');
  }

  get college() {
    return this.entryForm.get('college');
  }

  get fathersName() {
    return this.entryForm.get('fathersName');
  }

  get mothersName() {
    return this.entryForm.get('mothersName');
  }

  get phoneNumber() {
    return this.entryForm.get('phoneNumber'); 
  }

  get email(){
    return this.entryForm.get('email');
  }
  
}



import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }
  tabs = [1];
  addTab() {
    this.tabs.push(1);
    this.router.navigateByUrl('')
  }
  ngOnInit(): void {
  }

}

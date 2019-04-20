import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-offer',
  templateUrl: './sidebar-offer.component.html',
  styleUrls: ['./sidebar-offer.component.css']
})
export class SidebarOfferComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

}

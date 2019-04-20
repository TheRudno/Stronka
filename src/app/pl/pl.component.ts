import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pl',
  templateUrl: './pl.component.html',
  styleUrls: ['./pl.component.css']
})
export class PlComponent implements OnInit {

  constructor(public router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.router.navigate(['home'], {relativeTo: this.route, skipLocationChange: true});
  }

}

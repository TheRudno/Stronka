import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cz',
  templateUrl: './cz.component.html',
  styleUrls: ['./cz.component.css']
})
export class CzComponent implements OnInit {

  constructor(public router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
      if (this.router.url === '/cz') {
        this.router.navigate(['home'], {relativeTo: this.route, skipLocationChange: true});
      }
  }


}

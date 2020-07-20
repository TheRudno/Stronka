import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-cz',
  templateUrl: './en.component.html',
  styleUrls: ['./en.component.css']
})
export class EnComponent implements OnInit {

  constructor(public router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    if (this.router.url === '/en') {
      this.router.navigate(['home'], {relativeTo: this.route, skipLocationChange: true});
    }
  }

}

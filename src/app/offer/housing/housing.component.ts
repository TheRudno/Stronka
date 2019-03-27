import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { Router } from '@angular/router';


@Component({
  selector: 'app-housing',
  templateUrl: './housing.component.html',
  styleUrls: ['./housing.component.css']
})
export class HousingComponent implements OnInit {

  private albums: Array<{ src: string, caption: string, thumb: string }> = [];

  constructor(private lightbox: Lightbox, private router: Router) {
    let src = '../../../assets/images/housing/1.JPG';
    let caption = 'ARMES-W';
    let thumb = '../../../assets/images/housing/1.JPG';
    let album = {src, caption, thumb};
    this.albums.push(album);
    src = '../../../assets/images/housing/2.jpg';
    caption = 'ARMES-Z';
    thumb = '../../../assets/images/housing/2.jpg';
    album = {src, caption, thumb};
    this.albums.push(album);
  }

  open(index: number): void {
    // open lightbox
    this.lightbox.open(this.albums, index);
    console.log('opening');
  }

  close(): void {
    // close lightbox programmatically
    this.lightbox.close();
  }

  ngOnInit() {


  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-realizations-cz',
  templateUrl: './realizations-en.component.html',
  styleUrls: ['./realizations-en.component.css']
})
export class RealizationsEnComponent implements OnInit {

  public offerList: {title: string, imgPathList: string[]} [] = [];
  public index: number = null;

  constructor() {
    this.offerList.push({title: 'ArcelorMittal Kraków', imgPathList: ['./assets/images/realizations/arcelormittal-krakow.webp']});
    this.offerList.push({title: 'Kaufland Jesenik', imgPathList: ['./assets/images/realizations/kaufland-jesenik.webp']});
    this.offerList.push({title: 'Lidl Sternberk', imgPathList: ['./assets/images/realizations/lidl-sternberk.webp']});

    this.offerList.push({title: 'CH Futurum Ostrava', imgPathList: ['./assets/images/realizations/ostrava-ch-futurum.webp']});
    this.offerList.push({title: 'Bohuniovice', imgPathList: ['./assets/images/realizations/bohuniovice.webp']});
    this.offerList.push({title: 'Bom Plast Ceska Trebova', imgPathList: ['./assets/images/realizations/ceska-trebova.webp']});
    this.offerList.push({title: 'Gogolin', imgPathList: ['./assets/images/realizations/gogolin.webp']});
    this.offerList.push({title: 'MSEM Prerov', imgPathList: ['./assets/images/realizations/msem-prerov.webp']});
    this.offerList.push({title: 'Nova Seninka', imgPathList: ['./assets/images/realizations/nova-seninka.webp']});
    this.offerList.push({title: 'Ostrava Unigeo', imgPathList: ['./assets/images/realizations/ostrava-uniego.webp']});
    this.offerList.push({title: 'Styroprofile Bruntal', imgPathList: ['./assets/images/realizations/styroprofile-bruntal.webp']});
    this.offerList.push({title: 'Visimpex Prerov', imgPathList: ['./assets/images/realizations/visimpex-prerov.webp']});
    this.offerList.push({title: 'Taouros Metal Zivitice', imgPathList: ['./assets/images/realizations/zivitice.webp']});
    this.offerList.push({title: 'Hella Slovakia', imgPathList: ['./assets/images/realizations/hella-slovakia.webp']});

    if (this.offerList.length > 0) {
      this.index = 0;
      this.offerList.sort((a, b) => a.title.localeCompare(b.title));
    }
  }

  loadPictures(index: number) {
    this.index = index;
    window.scrollTo(0, 0);
  }

  ngOnInit() {
  }


}

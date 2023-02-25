import { Component, Input, OnInit } from '@angular/core';
import { LandingService } from 'src/app/services/landing.service';

@Component({
  selector: 'app-packs',
  templateUrl: './packs.component.html',
  styleUrls: ['./packs.component.scss']
})
export class PacksComponent implements OnInit {
  @Input() title: String = '';
  @Input() price: String = '';
  datos: any 

  constructor(private landingService: LandingService) { }

  ngOnInit(){
      this.landingService.getPackages().then(data => {
        this.datos = data;
      });
  }
}
import { Component, OnInit } from '@angular/core';
import { GenericText } from 'src/app/models/generic';
import { LandingService } from 'src/app/services/landing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  header: GenericText | undefined;

  constructor(private landingService: LandingService) {}

  ngOnInit(): void {
    this.getHeader();
  }

  async getHeader() {
    const header = await this.landingService.getHeader();
    this.header = header;
  }
}

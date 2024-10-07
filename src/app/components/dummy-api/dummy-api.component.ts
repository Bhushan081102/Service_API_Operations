import { Component } from '@angular/core';
import { DummyApiService } from 'src/app/services/dummy-api.service';

@Component({
  selector: 'app-dummy-api',
  templateUrl: './dummy-api.component.html',
  styleUrls: ['./dummy-api.component.css'],
})
export class DummyApiComponent {
  quote: any = '';
  id: any = '';
  author: any = '';
  allpost: any;
  allAlbum: any;
  constructor(private dummyApiServices: DummyApiService) {}

  getQuote() {
    this.dummyApiServices.getQuote().subscribe((response) => {
      (this.id = response.id),
        (this.quote = response.quote),
        (this.author = response.author);
    });
  }

  getAllAlbum() {
    this.dummyApiServices.getAllQuote().subscribe((response) => {
      this.allAlbum = response;
    });
  }

  getAllData() {
    this.dummyApiServices.getAllData().subscribe((response) => {
      this.allpost = response;
    });
  }
}

import { HttpClient, HttpEventType, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FoodService {
  private foodUrl: string = 'http://localhost:3005/foodItems';
  foodRequest = new HttpRequest('GET', this.foodUrl, {reportProgress: true});

  constructor(private http: HttpClient) { }

  loadFood() {
    return this.http.get(this.foodUrl);
  }

  getFoodProgress() {
    let totalBytes: number;
    this.http.request(this.foodRequest).subscribe(event => {
      if(event.type === HttpEventType.ResponseHeader) {
        console.log(event.headers.keys().map(key => `${key} : ${event.headers.get(key)}`));
        totalBytes = Number.parseInt(event.headers.get('x-contentlength'));
      } else if(event.type === HttpEventType.DownloadProgress) {
        const percentDone = Math.round(100 * event.loaded / totalBytes);
        console.log(`File is ${percentDone}% downloaded.`);
      } else if(event instanceof HttpResponse) {
        console.log('File is completely downloaded');
      }
    })
  }
}

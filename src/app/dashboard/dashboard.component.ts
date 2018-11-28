import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  selectedImage;
  imageUrls = [
    'https://media0.giphy.com/media/RQSuZfuylVNAY/giphy.gif?cid=3640f6095bfddf854e72316577400911',
    'https://media.giphy.com/media/ygCJ5Bul73NArGOSFN/giphy.gif',
    'https://media3.giphy.com/media/d3Fym9OQ08o6agYE/giphy.gif?cid=3640f6095bfde7dd394f765932a036a2'
  ];

  constructor() { }

  ngOnInit() {
  }

  showSelectedImage(imageUrl) {
    this.selectedImage = imageUrl;
  }

}

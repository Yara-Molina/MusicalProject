import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})

export class CarouselComponent {
  images = [
    { url: 'https://youtu.be/r1izVfVpBwE', thumbnail: 'https://img.youtube.com/vi/r1izVfVpBwE/hqdefault.jpg' },
    { url: 'https://youtu.be/66W9gG_kZS8', thumbnail: 'https://img.youtube.com/vi/66W9gG_kZS8/hqdefault.jpg' },
    { url: 'https://youtu.be/POHVE9uCNAY', thumbnail: 'https://img.youtube.com/vi/POHVE9uCNAY/hqdefault.jpg' },
    { url: 'https://youtu.be/FCrVQ8j_p3o', thumbnail: 'https://img.youtube.com/vi/FCrVQ8j_p3o/hqdefault.jpg' },
    { url: 'https://youtu.be/fxEQZXv8uN4', thumbnail: 'https://img.youtube.com/vi/fxEQZXv8uN4/hqdefault.jpg' },
    { url: 'https://youtu.be/GgxPJRN_LVI', thumbnail: 'https://img.youtube.com/vi/GgxPJRN_LVI/hqdefault.jpg' }
  ];
  activeIndex = 0;
  itemsPerPage = 3; 

  getVisibleImages() {
    return this.images.slice(this.activeIndex, this.activeIndex + this.itemsPerPage);
  }

  nextSlide() {
    this.activeIndex = (this.activeIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.activeIndex = (this.activeIndex - 1 + this.images.length) % this.images.length;
  }
}

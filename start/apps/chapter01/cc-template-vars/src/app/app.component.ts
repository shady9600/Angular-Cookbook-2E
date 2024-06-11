import { Component } from '@angular/core';
import { GalleryComponent } from './components/gallery/gallery.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  /**
   * Accesses GalleryComponents generate image function
   * and adds an image to the front of the pictures array.
   * 
   * @param gallery the template variable for GalleryComponent
   */
  addNewPicture(gallery: GalleryComponent) {
    gallery.pictures.unshift(gallery.generateImage())
  }

  /**
   * Accesses GalleryComponents pictures array and removes the first value.
   * 
   * @param gallery he template variable for GalleryComponent
   */
  removeFirstPicture(gallery: GalleryComponent) {
    gallery.pictures.shift();
  }
}

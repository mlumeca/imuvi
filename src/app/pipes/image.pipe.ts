import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(img: string): String {
   let url: string = 'https://media.themoviedb.org/t/p/w220_and_h330_face/';

    return url + img;
  }

}
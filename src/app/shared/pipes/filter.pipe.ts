import { Pipe, PipeTransform } from '@angular/core';

/*Pure allow to watch array changes  */
@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {


  transform(array:Array<number>): Array<number> {
    return array.filter(e => e %2 == 0);
  }

}

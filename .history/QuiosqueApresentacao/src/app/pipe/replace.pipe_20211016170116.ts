@import { Pipe } from '@angular/core';

@Pipe({
  name: 'name'
})
export class PipeNamePipe implements PipeTransform {

  transform(value: valueType, arg?: argType) {

  }

}({
  name: 'replace';
})

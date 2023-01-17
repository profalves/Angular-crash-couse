import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class PipesPipe implements PipeTransform {

  transform(value: string | undefined, ...args: unknown[]): string  {
    if(!value) return '';
    value = value?.toLowerCase();
    return value?.charAt(0).toUpperCase() + value?.slice(1)
  }

}

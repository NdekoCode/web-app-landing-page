import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimContent',
})
export class TrimContentPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    if (value) {
      return value.trim();
    }
    return value;
  }
}

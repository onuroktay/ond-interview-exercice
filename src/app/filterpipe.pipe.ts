import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  transform(items: any[], term): any {
    console.log('term', term);

    return term
      ? items.filter(item => item.name.indexOf(term) !== -1)
      : items;
  }

}

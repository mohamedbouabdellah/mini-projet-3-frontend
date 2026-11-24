import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  
  
  transform(list: any[], filterText: string): any {
    console.log("transforme Done");
    return list
      ? list.filter((item) => item.nomPhone.toLowerCase().includes(filterText))
      : [];
  }
}


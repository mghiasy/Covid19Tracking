import { Pipe, PipeTransform } from '@angular/core';
import { Country } from './country';
//  create custom pipe with ng g p pipeName
// can be custom filter in showing data in table
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  // value = return obj => total data list => can be any(Generic Type) or country , also the returnType
  //filterValue = item for filtering value by condition
  transform(value: any, fieldvalue: string): any {
    const returnArray  = [] 
    // console.log(fieldvalue==undefined);
    // console.log(fieldvalue===undefined);

    // console.log(fieldvalue=="");
    // console.log(fieldvalue==="");
    if (fieldvalue === undefined || fieldvalue==="") {
      //if filterValue is blank return the whole value as return
      console.log("fieldValue"+fieldvalue)
      return value;
    }
    //let for define variable in for loop
   // search is used instead of contains 
    for(let i=0;i<value.length;i++){
       if(value[i].Country.toLowerCase().search(fieldvalue.toLowerCase()) != -1){
        //if(value[i].Country.toLowerCase().contains(fieldvalue.toLowerCase())){
        console.log("returnArray"+value[i])
        returnArray.push(value[i])
      }
    }
    console.log("returnArray"+returnArray)
    return returnArray;
  }

}

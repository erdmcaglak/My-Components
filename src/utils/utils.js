import _ from 'lodash'
import moment from 'moment'
//timestamp ı tarihe çevirir 
//112345246346 -> 02.11.2020
export function timeStampToDay(date){
    return moment.unix(date).format('DD/MM/YYYY HH:mm')
}

export function timeStampToHour(date) {
  return moment.unix(date).format('HH:mm')
}

// uzun sitring'in sonuna 3 nokta ekler 
// Erdem Çağ...
export function stringShorter(str, len = 16) {
    if(str.length > len)
      return str.substring(0, len) + '...'
    else
      return str
}

//verilen stringi json olarak döndürür
export function jsonParser(str) {
    if (_.isEmpty(str))
      return str
    else {
      var t = '',
        special = '[]{} :,',
        qt;

      str = str.split('');

      for (var i = 0; i < str.length; i++) {
        if ((qt = str[i]) === "'" || qt === '"') {
          do {
            t += str[i++].replace("'", '"');
          } while (i < str.length && str[i] !== qt);
          t += qt.replace("'", '"');
        }
        else if (special.indexOf(str[i]) === -1) {
          t += '"';
          do {
            t += str[i++];
          } while (i < str.length && special.indexOf(str[i]) == -1)
          t += '"';
          i--;
        }
        else {
          t += str[i];
        }
      }
      try {
        let parsed = JSON.parse(t);
        return parsed
      } catch (e) {
        console.log(e);
        return 'Hata! Veri JSON değil.';
      }
    }
}

export function sortAll(item,sort='up',sortedBy){
  if(!Array.isArray(item)) return item;
  else if (item.length == 0) return item;

  if(typeof item[0] == 'string'){
    if(!isNaN(parseInt(item[0]))){
      if(sort == 'down'){
        item.sort((a,b)=>{
          return b-a;
        })
      }
      else{
        item.sort((a,b)=>{
          return a-b;
        })
      }
    }
    else{
      if(sort=='down'){
        item.sort((a,b)=>{
          return b.localeCompare(a)
        })
      }
      else{
        item.sort((a,b)=>{
          return a.localeCompare(b)
        })
      }
    }
  }

  else if(typeof item[0] == 'number'){
    if(sort == 'down'){
      item.sort((a,b)=>{
        return b-a;
      })
    }
    else{
      item.sort((a,b)=>{
        return a-b;
      })
    }
  }

  else if(typeof item[0]=='object'){
    if(sort == 'down'){
      item.sort((a,b)=>{
        if(b[sortedBy]=='number')
          return b[sortedBy]-a[sortedBy];
        else{
          if ( a[sortedBy] < b[sortedBy] ){
            return 1;
          }
          if ( a[sortedBy] > b[sortedBy] ){
            return -1;
          }
          return 0;
        }
      })
    }
    else{
      item.sort((a,b)=>{
        if(b[sortedBy]=='number')
          return a[sortedBy]-b[sortedBy];
        else{
          if ( a[sortedBy] < b[sortedBy] ){
            return -1;
          }
          if ( a[sortedBy] > b[sortedBy] ){
            return 1;
          }
          return 0;
        }
      })
    }
  }
  return item;
  
}

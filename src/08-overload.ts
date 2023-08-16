// (Nico) => [N,i,c,o] => string => string[]
//  [N,i,c,o] => (Nico) => string[] => string

function parseStr(input: string | string[]): string | string[] {
  if(Array.isArray(input)) {
    return input.join('');         //retorna un string
  } else {
    return input.split(""); //retorna un string[]
  }
};

const rtaArray = parseStr('Nico');
if(Array.isArray(rtaArray)){
  rtaArray.reverse();
}
console.log('rtaArray', 'Nico => ', rtaArray);

const rtaString = parseStr(['N', 'i', 'c','o']);
if(typeof rtaString === 'string'){
  rtaString.toLowerCase();
}
console.log('rtaString', "N,i,c,o] =>" , rtaString);

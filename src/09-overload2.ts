// (Nico) => [N,i,c,o] => string => string[]
//  [N,i,c,o] => (Nico) => string[] => string

export function parseStr(input:string): string[];
export function parseStr(input:string[]): string;
export function parseStr(input:number): boolean;

/*export function parseStr(input: string | string[]): string | string[] {
  if(Array.isArray(input)) {
    return input.join('');                                //retorna un string
  } else {
    return input.split("");                               //retorna un string[]
  }
};*/

export function parseStr(input: unknown): unknown {
  if(Array.isArray(input)) {
    return input.join('');                                //retorna un string
  } else if (typeof input === 'string') {
    return input.split("");                               //retorna un string[]
  } else if (typeof input === 'number') {
    return true;                                          //retorna boolean
  }
};

const rtaArray = parseStr('Nico');
rtaArray.reverse();
if(Array.isArray(rtaArray)){
  rtaArray.reverse();
}
console.log('rtaArray', 'Nico => ', rtaArray);

const rtaString = parseStr(['N', 'i', 'c','o']);
rtaString.toLowerCase();
if(typeof rtaString === 'string'){
  rtaString.toLowerCase();
}
console.log('rtaString', "N,i,c,o] =>" , rtaString);

const rtaBoolean = parseStr(73);

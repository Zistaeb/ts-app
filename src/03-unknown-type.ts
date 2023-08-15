let anyVar: any;
anyVar = true;
anyVar = undefined;
anyVar = null;
anyVar = 7;
anyVar = [];
anyVar = {};

let isNew: boolean = anyVar;

anyVar.doSomething();
anyVar.toUpperCase();

let unknownVar: unknown;
unknownVar = true;
unknownVar = undefined;
unknownVar = null;
unknownVar = 7;
unknownVar = [];
unknownVar = {};

if (typeof unknownVar === 'string') {
  unknownVar.toUpperCase();
};

if (typeof unknownVar === 'boolean') {
  let isNewV2: boolean = unknownVar;
};

const parse = (str: string) : unknown => {
  return JSON.parse(str);
};
//JSON.parse(`{name: 'nicol'}`)                      //JS Object Notation


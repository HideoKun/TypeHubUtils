export type ConsistentSimpleObject = {
  a: string;
  b: number;
  c: boolean;
};

export type ConsistentSimpleArr = string[];

export type ConsistentDeepObj = {
  a: {
    a1: string;
  };
  b: {
    b1: number;
    b2: {
      b21: boolean;
    };
  };
  c: symbol;
  d?: (string | number)[];
};

export type ConsistentDeepArr = [string, number[], (boolean | symbol)[]];

type TestType = {
  a: number;
};

export type InConsistentDeepObj = {
  a: {
    a1: TestType;
  };
  b: {
    b1: number;
    b2: {
      b21: boolean;
    };
  };
  c: symbol;
  d?: {
    d1: (null | number)[];
  };
};

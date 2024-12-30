// TODO: validations is missing
export type isArrOfType<Arr extends unknown[], Match> = [Arr] extends [Match[]]
  ? true
  : false;

export type IsTrueArr<T extends boolean[]> = isArrOfType<T, true>;

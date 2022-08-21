
export const minNotZero = (values?: (number | null | undefined)[]): number => {
  const notZeroValues: number[] = values ? values.filter((v) => !!v) as number[] : [];

  return notZeroValues.length ? Math.min.apply(null, notZeroValues) : 0;
};

export default minNotZero;

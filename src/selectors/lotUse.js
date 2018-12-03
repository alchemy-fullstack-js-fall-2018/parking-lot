export const getTimesInLot = ( state, plate ) => {
  const usage = state.lotUse.lotUse;
  return usage[plate];
};

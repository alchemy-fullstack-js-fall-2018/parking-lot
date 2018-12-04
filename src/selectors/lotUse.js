export const getTimesInLot = ( state, plate ) => {
  const usage = state.lotUse;
  return usage[plate] || 0;
};

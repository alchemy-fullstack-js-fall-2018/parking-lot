export const getTimesInLot = (state, plate) => {
  const allUsage = state.lotUse.lotUse;
  return allUsage[plate];
};

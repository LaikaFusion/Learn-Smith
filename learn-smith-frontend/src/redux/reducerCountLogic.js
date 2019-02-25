const add = (intial, toAdd) => {
  return intial + toAdd;
};

const subtract = (intial, toRemove) => {
  if (intial > 0) {
    return intial - toRemove;
  }
  return 0;
};

export { add, subtract };

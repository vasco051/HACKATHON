export const getIdCard = (index: number) => {
  return index === 0 ? 'root' : `element-${index}`;
};

export const getTargetId = (index: number) => {
  return `element-${index + 1}`;
};

export const getTargetPositionTarget = (index: number) => {
  return index % 3 == 0 ? 'right' : 'top';
};

export const getTargetPositionSource = (index: number) => {
  return index % 3 == 1 ? 'left' : 'bottom';
};
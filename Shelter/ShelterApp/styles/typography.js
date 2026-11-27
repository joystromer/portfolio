export const base = {
  fontSize: 16,
};
export const small = {
  fontSize: 12,
};
export const large = {
  fontSize: 32,
};
export const heading = (scale = 1) => ({
  fontSize: base.fontSize * scale,
  color: 'red',
});

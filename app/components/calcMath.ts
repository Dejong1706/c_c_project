// Round a quantity UP to a whole count (bags, boxes, posts, trucks…).
// Snaps to 9 decimals first so floating-point noise like 11.000000000000002
// (from e.g. 100 * 1.1 / 10) doesn't add a phantom extra unit.
export function ceilCount(x: number): number {
  return Math.ceil(Math.round(x * 1e9) / 1e9);
}

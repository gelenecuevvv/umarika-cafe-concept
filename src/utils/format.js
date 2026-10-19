export function formatPeso(amount) {
  return `₱${Number(amount).toLocaleString('en-PH')}`
}

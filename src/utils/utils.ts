
export function convertMinsToHrsMins(totalMins: number) {
  const h = Math.floor(totalMins / 60)
  const m = totalMins % 60
  const hours = h
  const mins = m < 10 ? '0' + m : m
  
  return `${hours}h ${mins != '00' ? `${mins} mins` : ''}`
}
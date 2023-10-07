export const timestampToRegularTime = (zone: number): string => {
  const date = new Date()
  const zoneH = zone / 3600

  const hours = String(customSum(date.getHours(), zoneH)).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')

  const regularTime = `${hours}:${minutes}:${seconds}`
  return regularTime
}

export const customSum = (num1: number, num2: number) => {
  let sum = num1 + num2
  if (sum >= 24) {
    sum -= 24
  }
  return sum
}

export const timestampToRegularDate = (time: number): string => {
  const date = new Date(time * 1000)

  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getUTCDate()).padStart(2, '0')

  const regularTime = `${month}-${day}`
  return regularTime
}

export const timestampToRegularHour = (zone: number): number => {
  const date = new Date()
  const zoneH = zone / 3600

  const hours = date.getUTCHours() + zoneH

  return hours
}

import { customSum, timestampToRegularDate, timestampToRegularHour, timestampToRegularTime } from './'

describe('timestampToRegularTime', () => {
  test('converts timestamp to regular time format', () => {
    const zone = 3600 // Assuming the timezone offset is 1 hour
    const regularTime = timestampToRegularTime(zone)
    expect(regularTime).toMatch(/\d{2}:\d{2}:\d{2}/) // Regular time format HH:MM:SS
  })
})

describe('customSum', () => {
  test('sums two numbers and handles overflow', () => {
    expect(customSum(20, 9)).toBe(5) // 20 + 9 = 29, but after handling overflow, it becomes 5
  })
})

describe('timestampToRegularDate', () => {
  test('converts timestamp to regular date format', () => {
    const time = 1633440000 // Assuming the timestamp corresponds to October 5, 2021
    const regularDate = timestampToRegularDate(time)
    expect(regularDate).toBe('10-05') // Regular date format MM-DD
  })
})

describe('timestampToRegularHour', () => {
  test('converts timezone offset to regular hour', () => {
    const zone = 3600 // Assuming the timezone offset is 1 hour
    const regularHour = timestampToRegularHour(zone)
    expect(regularHour).toBeGreaterThan(0) // Regular hour should be greater than 0
  })
})

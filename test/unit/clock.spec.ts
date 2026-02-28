import { describe, expect, it } from 'vitest'
import { useClock } from '../../app/composables/clock'

describe('useClock.createClockString', () => {
  it('returns formatted values for a morning weekday', () => {
    const { createClockString } = useClock()
    const result = createClockString(new Date(2026, 0, 5, 9, 7))

    expect(result).toEqual({
      month: '1',
      day: '5',
      week: 0,
      hour: '9',
      minute: '07',
      ampm: 'AM',
    })
  })

  it('converts Sunday to week index 6', () => {
    const { createClockString } = useClock()
    const result = createClockString(new Date(2026, 0, 4, 0, 0))

    expect(result).toEqual({
      month: '1',
      day: '4',
      week: 6,
      hour: '0',
      minute: '00',
      ampm: 'AM',
    })
  })

  it('returns PM for afternoon times', () => {
    const { createClockString } = useClock()
    const result = createClockString(new Date(2026, 6, 21, 15, 42))

    expect(result).toEqual({
      month: '7',
      day: '21',
      week: 1,
      hour: '3',
      minute: '42',
      ampm: 'PM',
    })
  })

  it('returns 0:00 AM for midnight', () => {
    const { createClockString } = useClock()
    const result = createClockString(new Date(2026, 0, 6, 0, 0))

    expect(result).toEqual({
      month: '1',
      day: '6',
      week: 1,
      hour: '0',
      minute: '00',
      ampm: 'AM',
    })
  })
})

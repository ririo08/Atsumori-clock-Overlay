import { format } from 'date-fns/format'
import type { Clock } from '~/types/Clock'

export const useClock = () => {
  return {
    createClockString: (date: Date): Clock => {
      const dateArray = format(date, 'M,d,i,h,mm,aa').split(',')
      return {
        month: dateArray[0]!,
        day: dateArray[1]!,
        week: Number(dateArray[2]!) - 1,
        hour: dateArray[3]!,
        minute: dateArray[4]!,
        ampm: dateArray[5]!,
      }
    },
  }
}

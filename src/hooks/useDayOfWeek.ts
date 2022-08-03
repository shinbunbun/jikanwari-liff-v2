import { useEffect, useState } from 'react'

export type DayOfWeek =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'

export const useDayOfWeek = (): {
  dayOfWeek: DayOfWeek
  setDayOfWeek: React.Dispatch<React.SetStateAction<DayOfWeek>>
} => {
  const [dayOfWeek, setDayOfWeek] = useState<DayOfWeek>('monday')

  useEffect(() => {
    const date = new Date()
    const day = date.getDay()

    switch (day) {
      case 0:
        setDayOfWeek('monday')
        break
      case 1:
        setDayOfWeek('monday')
        break
      case 2:
        setDayOfWeek('tuesday')
        break
      case 3:
        setDayOfWeek('wednesday')
        break
      case 4:
        setDayOfWeek('thursday')
        break
      case 5:
        setDayOfWeek('friday')
        break
      case 6:
        setDayOfWeek('saturday')
        break
      default:
        setDayOfWeek('monday')
        break
    }
  }, [])

  return { dayOfWeek, setDayOfWeek }
}

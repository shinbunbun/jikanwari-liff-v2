/**
 * '【金曜日】\n1.社数演\n2.理選\n3.コミュ英3\n4.現文\n5.化学\n6.数3' のような文字列を配列に変換する
 */

export const convertTimetableStringToArray = (timetableString: string) => {
  const timetableArrayWithNumber = timetableString.split('\n').slice(1)
  const timeTableArray = timetableArrayWithNumber.map((timetable) => {
    const [, subject] = timetable.split('.')
    return subject
  })
  return timeTableArray
}

type DayOfWeek =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'

const translateDayOfWeek = (dayOfWeek: DayOfWeek) => {
  const dayOfWeekMap = {
    monday: '【月曜日】',
    tuesday: '【火曜日】',
    wednesday: '【水曜日】',
    thursday: '【木曜日】',
    friday: '【金曜日】',
    saturday: '【土曜日】',
  }

  return dayOfWeekMap[dayOfWeek]
}

export const convertTimetableArrayToString = (
  timetableArray: string[],
  dayOfWeek: DayOfWeek
) => {
  const timetableString = timetableArray
    .map((timetable, index) => `${index + 1}.${timetable}`)
    .join('\n')
  return `${translateDayOfWeek(dayOfWeek)}\n${timetableString}`
}

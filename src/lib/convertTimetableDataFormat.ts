import { TimeTable } from '../hooks/useTimeTable'
import {
  convertTimetableArrayToString,
  convertTimetableStringToArray,
} from './convertTimetableStringToArray'

interface Property {
  mon: string
  tue: string
  wed: string
  thu: string
  fri: string
  sat: string
}

export interface TimeTableFrontend {
  ID: string
  date: string
  notificationTime: string | null
  notifyToken: string | null
  property: Property
  timetable: {
    mon: string[]
    tue: string[]
    wed: string[]
    thu: string[]
    fri: string[]
    sat: string[]
  }
  uuid: string | null
}

export const convertTimetableDataFormatForFrontend = (
  timetable: TimeTable
): TimeTableFrontend => {
  let property = ['', '', '', '', '', '']
  if (timetable.property) {
    property = timetable.property.split(',')
  }

  const timetableFrontend: TimeTableFrontend = {
    ID: timetable.ID,
    date: timetable.date,
    notificationTime: timetable.flag,
    notifyToken: timetable.notifyToken,
    property: {
      mon: property[0],
      tue: property[1],
      wed: property[2],
      thu: property[3],
      fri: property[4],
      sat: property[5],
    },
    timetable: {
      mon: convertTimetableStringToArray(timetable.mon),
      tue: convertTimetableStringToArray(timetable.tue),
      wed: convertTimetableStringToArray(timetable.wed),
      thu: convertTimetableStringToArray(timetable.thu),
      fri: convertTimetableStringToArray(timetable.fri),
      sat: convertTimetableStringToArray(timetable.sat),
    },
    uuid: timetable.uuid,
  }

  return timetableFrontend
}

const propertyFormat = ({ mon, tue, wed, thu, fri, sat }: Property) =>
  [mon, tue, wed, thu, fri, sat, ''].join(',')

export const convertTimetableDataFormatForBackend = (
  timetable: TimeTableFrontend
): TimeTable => {
  const timetableBackend: TimeTable = {
    ID: timetable.ID,
    date: timetable.date,
    flag: timetable.notificationTime,
    mon: convertTimetableArrayToString(timetable.timetable.mon, 'monday'),
    tue: convertTimetableArrayToString(timetable.timetable.tue, 'tuesday'),
    wed: convertTimetableArrayToString(timetable.timetable.wed, 'wednesday'),
    thu: convertTimetableArrayToString(timetable.timetable.thu, 'thursday'),
    fri: convertTimetableArrayToString(timetable.timetable.fri, 'friday'),
    sat: convertTimetableArrayToString(timetable.timetable.sat, 'saturday'),
    notifyToken: timetable.notifyToken,
    property: propertyFormat(timetable.property),
    uuid: timetable.uuid,
  }

  return timetableBackend
}

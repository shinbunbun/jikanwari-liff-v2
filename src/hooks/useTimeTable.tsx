import { useEffect, useState } from 'react'

export interface TimeTable {
  ID: string
  date: string
  flag: string | null
  fri: string
  mon: string
  notifyToken: string | null
  property: string | null
  sat: string
  thu: string
  tue: string
  uuid: string | null
  wed: string
}

const getTimeTable = (userId: string): TimeTable => {
  // Todo: execute api
  const dummyTimeTable = {
    ID: userId,
    date: '2020年09月27日 (日) 10時56分51秒',
    flag: '21',
    fri: '【金曜日】\n1.社数演\n2.理選\n3.コミュ英3\n4.現文\n5.化学\n6.数3',
    mon: '【月曜日】\n1.体育\n2.理選\n3.化学\n4.国英選\n5.理演\n6.英演',
    notifyToken: 'XXXXX',
    property: ',,,,体操着,体操着,',
    sat: '【土曜日】\n1.コミュ英3\n2.化学\n3.化学\n4.英演',
    thu: '【木曜日】\n1.化学\n2.理演\n3.数3\n4.数3\n5.英表2\n6.体育',
    tue: '【火曜日】\n1.数3\n2.数3\n3.現文\n4.コミュ英3\n5.国英選\n6.社数演',
    uuid: 'XXXXX',
    wed: '【水曜日】\n1.英表2\n2.体育\n3.理選\n4.数3\n5.数3\n6.LHR',
  }
  return dummyTimeTable
}

export const useTimeTable = (userId: string) => {
  const [timeTable, setTimeTable] = useState<TimeTable>()

  // TODO: 時間割取得
  useEffect(() => {
    const userTimeTable = getTimeTable(userId)
    setTimeTable(userTimeTable)
  }, [userId])

  // TODO: 時間割登録
  useEffect(() => {
    /*  */
  }, [])

  return timeTable
}

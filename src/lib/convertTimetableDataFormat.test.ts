import {
  convertTimetableDataFormatForBackend,
  convertTimetableDataFormatForFrontend,
} from './convertTimetableDataFormat'

test('convert for frontend', () => {
  expect(
    convertTimetableDataFormatForFrontend({
      ID: 'test id',
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
    })
  ).toEqual({
    ID: 'test id',
    date: '2020年09月27日 (日) 10時56分51秒',
    notificationTime: '21',
    property: {
      mon: '',
      tue: '',
      wed: '',
      thu: '',
      fri: '体操着',
      sat: '体操着',
    },
    timetable: {
      mon: ['体育', '理選', '化学', '国英選', '理演', '英演'],
      tue: ['数3', '数3', '現文', 'コミュ英3', '国英選', '社数演'],
      wed: ['英表2', '体育', '理選', '数3', '数3', 'LHR'],
      thu: ['化学', '理演', '数3', '数3', '英表2', '体育'],
      fri: ['社数演', '理選', 'コミュ英3', '現文', '化学', '数3'],
      sat: ['コミュ英3', '化学', '化学', '英演'],
    },
    uuid: 'XXXXX',
    notifyToken: 'XXXXX',
  })
})

test('convert for backend', () => {
  expect(
    convertTimetableDataFormatForBackend({
      ID: 'test id',
      date: '2020年09月27日 (日) 10時56分51秒',
      notificationTime: '21',
      property: {
        mon: '',
        tue: '',
        wed: '',
        thu: '',
        fri: '体操着',
        sat: '体操着',
      },
      timetable: {
        mon: ['体育', '理選', '化学', '国英選', '理演', '英演'],
        tue: ['数3', '数3', '現文', 'コミュ英3', '国英選', '社数演'],
        wed: ['英表2', '体育', '理選', '数3', '数3', 'LHR'],
        thu: ['化学', '理演', '数3', '数3', '英表2', '体育'],
        fri: ['社数演', '理選', 'コミュ英3', '現文', '化学', '数3'],
        sat: ['コミュ英3', '化学', '化学', '英演'],
      },
      uuid: 'XXXXX',
      notifyToken: 'XXXXX',
    })
  ).toEqual({
    ID: 'test id',
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
  })
})

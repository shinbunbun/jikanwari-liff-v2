import { VFC } from 'react'
import { Box, Container, HStack, Spacer, VStack } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { useLiffProfile } from '../hooks/useLiffProfile'
import { useLiffObject } from '../provider/LiffProvider'
import { Header } from '../components/Header'
import { IconButton } from '../components/IconButton'
import { Logo } from '../components/Logo'
import { Avatar } from '../components/Avatar'
import { useTimeTable } from '../hooks/useTimeTable'
import { PageMain } from '../components/PageMain'
import { DayOfWeek, useDayOfWeek } from '../hooks/useDayOfWeek'
import { CircularButton } from '../components/CircularButton'
import {
  convertTimetableDataFormatForFrontend,
  TimeTableFrontend,
} from '../lib/convertTimetableDataFormat'
import Card, { CardBody, CardTitle } from '../components/Card'
import { Button } from '../components/Button'

const HomePageHeader = () => {
  const liff = useLiffObject()
  const profile = useLiffProfile(liff)

  return (
    <Header>
      <HStack paddingX="16px" justifyContent="space-between" width="100%">
        <HStack spacing="12px">
          <IconButton icon={<HamburgerIcon />} />
          <Logo />
        </HStack>
        <IconButton
          icon={
            <Avatar
              src={profile?.pictureUrl || ''}
              name={profile?.displayName || ''}
            />
          }
        />
      </HStack>
    </Header>
  )
}

const HomePageMain = () => {
  const liff = useLiffObject()
  const profile = useLiffProfile(liff)

  const timeTable = useTimeTable(profile?.userId || '')
  let formatedTimeTable: TimeTableFrontend | undefined
  if (timeTable) {
    formatedTimeTable = convertTimetableDataFormatForFrontend(timeTable)
  }

  const { dayOfWeek, setDayOfWeek } = useDayOfWeek()

  const tab: {
    label: string
    value: DayOfWeek
    content: string[] | undefined
  }[] = [
    { label: '月', value: 'monday', content: formatedTimeTable?.timetable.mon },
    {
      label: '火',
      value: 'tuesday',
      content: formatedTimeTable?.timetable.tue,
    },
    {
      label: '水',
      value: 'wednesday',
      content: formatedTimeTable?.timetable.wed,
    },
    {
      label: '木',
      value: 'thursday',
      content: formatedTimeTable?.timetable.thu,
    },
    { label: '金', value: 'friday', content: formatedTimeTable?.timetable.fri },
    {
      label: '土',
      value: 'saturday',
      content: formatedTimeTable?.timetable.sat,
    },
  ]

  return (
    <PageMain>
      <HStack spacing="16px">
        {tab.map((item) => (
          <CircularButton
            label={item.label}
            theme={item.value === dayOfWeek ? 'blue' : 'white'}
            onClick={() => setDayOfWeek(item.value)}
            key={item.value}
          />
        ))}
      </HStack>
      <Card>
        <CardBody>ここに予定を入れる</CardBody>
      </Card>
      <Card>
        <CardTitle title="備考" />
        <CardBody>
          {formatedTimeTable?.property
            ? formatedTimeTable.property[
                dayOfWeek.substring(
                  0,
                  3
                ) as keyof typeof formatedTimeTable.property
              ]
            : ''}
        </CardBody>
      </Card>
      <Button label="編集する" />
    </PageMain>
  )
}

export const HomePage: VFC = () => (
  <VStack>
    <HomePageHeader />
    <Box width="100%" height="40px" />
    <HomePageMain />
    <Box width="100%" height="40px" />
  </VStack>
)

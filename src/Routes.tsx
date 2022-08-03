import {
  Navigate,
  ReactLocation,
  Route,
  Router,
} from '@tanstack/react-location'
import React, { FC } from 'react'
import { HomePage } from './pages/HomePage'

const reactLocation = new ReactLocation()

export const Routes: FC = () => {
  const routes: Route[] = [
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: 'editor',
      element: <>タイムテーブルを編集するお</>,
    },
    {
      element: <Navigate to="/" />,
    },
  ]

  return <Router location={reactLocation} routes={routes} />
}

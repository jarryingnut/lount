import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuthState } from '../context/auth'

export default function DynamicRoute(props: any) {
  const { user }: any = useAuthState()
  console.log('dynamic', user)

  if (props.authenticated && !user) {
    return <Redirect to="/login" />
  } else if (props.guest && user) {
    return <Redirect to="/" />
  } else {
    return <Route component={props.component} {...props} />
  }
}
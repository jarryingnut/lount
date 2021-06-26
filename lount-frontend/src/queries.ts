import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
  query login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      username
      email
      createdAt
      token
      
    }
  }
`

export const REGISTER_USER = gql`
mutation register(
  $username: String!
  $email: String!
  $password: String!
  $confirmPassword: String!
) {
  register(
    username: $username
    email: $email
    password: $password
    confirmPassword: $confirmPassword
  ) {
    username
    email
    createdAt
  }
}
`

export const GET_USERS = gql`
query getUsers {
  getUsers {
    username
    createdAt
    token
    imageUrl
    latestMessage {
        uuid
        from
        to
        content
        createdAt
      }
  }
}
`

export const GET_MESSAGES = gql`
  query getMessages($from: String!) {
    getMessages(from: $from) {
      uuid
      from
      to
      content
      createdAt
    }
  }
`
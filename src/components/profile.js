import React from 'react'
import { getUser } from '../utils/auth'

const Profile = () => (
  <>
    <h1>Your Profile</h1>
    <ul>
      <li>Name: {getUser().name}</li>
      <li>Email: {getUser().email}</li>
    </ul>
  </>
)

export default Profile

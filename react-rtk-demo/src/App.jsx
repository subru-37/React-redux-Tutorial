import React from 'react'
import IcecreamView from './features/icecream/icecreamView';
import CakeView from './features/cake/cakeView';
import UserView from './features/user/userView';

export default function App() {
  return (
    <div>
      <CakeView/>
      <UserView/>
      <IcecreamView/>
    </div>
  )
}


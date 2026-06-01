import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { UseAuth } from './context/AuthContext'
import { useSelector } from 'react-redux'
import PropsTesting from './components/PropsTesting'

const Home = lazy(() => import('./components/Home'))
const Child = lazy(() => import('./Child'))

const App = () => {
  const { user, setUser } = UseAuth()
  const userFromStore = useSelector(state => state.auth.user)
  console.log(userFromStore)
  return (
    <div>
      <h1>this user is thi s{user}</h1>
      <input type="enter" onChange={(e) => setUser(e.target.value)} />
      <PropsTesting name={user} email={user} />
      <PropsTesting name="welome" email="welcome" />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/child' element={<Child />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
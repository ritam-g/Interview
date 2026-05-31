import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'

const Home = lazy(() => import('./components/Home'))
const Child = lazy(() => import('./Child'))

const App = () => {
  return (
    <div>
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
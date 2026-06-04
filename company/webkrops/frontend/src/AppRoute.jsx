import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Child from './Child'
import Parent from './Parent'
import { RouterProvider } from 'react-router-dom'

const routes = createBrowserRouter([
    {
        path: "/",
        element: <h1>Home</h1>
    },
    {
        path: "/child",
        element: <Child />
    },
    {
        path: "/parent",
        element: <Parent />,
        children: [
            {
                path: "first",
                element: <h1>first</h1>
            }
        ]
    }
])

export const AppRoute = () => {
    return (
        <RouterProvider router={routes} />
    )
}


const routes = createBrowserRouter([
    {
      path: '/',
      element: (
        <PrivateRoute>
          <App />
        </PrivateRoute>
      ),
      children: [
        {
          index: true,
          element: <Tasks />,
        },
        {
          path: '/archive',
          element: <Archive />,
        },
        {
          path: '/chat',
          element: <Chat />,
        },
        {
          path: '/settings',
          element: <Settings />,
        },
        {
          path: '/profile',
          element: <Profile />,
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/signup',
      element: <Signup />,
    },
  ]);
  

export default routes;
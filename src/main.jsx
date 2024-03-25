import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter,useParams } from 'react-router-dom'
import About from './Components/About.jsx'
import Projects from './Components/Projects.jsx'
import Contact from './Components/Contact.jsx'
import Params from './Components/Params.jsx'


let { id } = useParams();
function ProfilePage() {
  // Get the userId param from the URL.
  // ...
}

const router = createBrowserRouter([
  {
    path : "",
    element : <App/>,
    children : [
      {
        path : "/",
        element : <App/>
      },
      {
        path : "about",
        element : <About/>
      },
      {
        path : "projects",
        element : <Projects/>
      },
      {
        path : "contact",
        element : <Contact/>
      },
      {
        path : ":id",
        element : <Params/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

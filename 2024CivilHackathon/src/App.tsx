import { Routes, Route } from "react-router-dom"
import Layout from './components/layout'
import SignUp from './components/signup'
import LogIn from './components/login'
import Home from "./components/home/home"
import { UserProvider } from "./components/usercontext"
import { ThemeProvider } from "@/components/theme-provider"


function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <UserProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path='/login' element={<LogIn />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
        </UserProvider>
      </ThemeProvider>
    </>
  )
}

export default App
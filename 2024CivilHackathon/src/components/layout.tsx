import { useEffect, useState, useContext } from "react";
import { Outlet, Link, useLocation } from "react-router-dom"
import {FaSearch} from "react-icons/fa";
import { Button  } from "./ui/button"
import { useNavigate } from "react-router-dom"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { UserContext } from './usercontext';
import { useTheme } from "@/components/theme-provider"
import { Input } from "@/components/ui/input"


export default function Layout() {
  const navigate = useNavigate()
  const location = useLocation()
  const { theme, setTheme } = useTheme()
  const { email } = useContext(UserContext);


  if (!email) return (
    <main>
      <nav>
        <ul className="flex justify-between px-4 mx-auto py-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="flex content-center">
              <div>
            <Input className="rounded-3xl w-80" placeholder="Search..." onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="px-4">
            <Button asChild variant="outline">
              <Link to="/login">Log In</Link>
            </Button>
            </div>
            <Button asChild>
              <Link to="/signup">Sign Up</Link>
            </Button> 
          </li>
        </ul>
      </nav>

      <section className="content section-container">
        <Outlet />
      </section>
    </main >
  )

  return (
    <main>
      <nav>
        <ul className="flex justify-between px-4 mx-auto py-2">
          <li className="flex">
            <NavigationMenu>
              <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link to="/">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Home
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  {location.pathname === '/' &&
                  <NavigationMenuItem>
                    <Link to="/docs">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Documentation
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>}
                </NavigationMenuList>
              </NavigationMenu>
          </li>
          {location.pathname === '/' ? (
            <li className="flex">
              <div className="px-4">
            <Input className="rounded-3xl w-80" placeholder="Search..." onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger>
            <div className="flex items-center space-x-2">
              <Avatar>
                <AvatarFallback className="bg-blue">{email[0]}</AvatarFallback>
              </Avatar>
            </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
              <button onClick={() => theme!='dark' ? setTheme("dark") : setTheme("light")}> Toggle theme</button>
              </DropdownMenuItem>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem><button className="text-red">Log Out</button></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> </li>) : (
              <li>
              <Avatar>
                <AvatarFallback>{user.name[0]}</AvatarFallback>
              </Avatar>
              </li>
          )}
        </ul>
      </nav>

      <section className="content section-container">
        <Outlet />
      </section>
    </main >
  )
}
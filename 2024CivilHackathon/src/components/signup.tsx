import { FormEvent, useState, useContext } from "react";
import { Button } from "@/components/ui/button"
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from './usercontext';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FaGoogle } from "react-icons/fa6"


export default function SignUp() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const navigate = useNavigate()
  const { setUser } = useContext(UserContext);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) {
      alert('Email is required.')
      return;
    }

    if (!password) {
      alert('Password is required.')
      return;
    }

    if (password.length < 8) {
      alert('Password must be at least 8 characters long.')
      return;
    }

    reloadUser(email).then(() => {
        navigate('/');
    })
  }

  return (
    <>
    <Button className="absolute right-4 top-4" asChild><Link to="/login">Log In</Link></Button>
    <div className="flex justify-center items-center h-screen">
      <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-1 gap-6">
          <Button variant="outline">
            <FaGoogle className="mr-2 h-4 w-4" />
            Google
          </Button>
        </div>
        <div className="relative">
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" placeholder="m@example.com" onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" name="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="flex justify-center">
              <Button type="submit" variant="outline">Sign Up</Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
    </div>
    </>
  )
}
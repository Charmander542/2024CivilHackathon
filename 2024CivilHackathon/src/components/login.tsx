import { FormEvent, useState, useContext   } from "react";
import { useNavigate } from "react-router-dom"
import { UserContext } from './usercontext';
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom";
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
import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";


function LoginPage() {
  const { setEmail } = useContext(UserContext);
  const [email, setEmailState] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert('Email is required.')
      return;
    }

    if (!password) {
      alert('Password is required.')
      return;
    }
    // Perform login logic here
    setEmail(email); // Set email from the login form to the context
    console.log(email);
    navigate('/');
  };

  return (
    <>
      <Button className="absolute right-4 top-4" asChild><Link to="/signup">Sign Up</Link></Button>
      <div className="flex justify-center items-center h-screen">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Log In</CardTitle>
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
                  <Input id="email" name="email" placeholder="m@example.com" onChange={(e) => setEmailState(e.target.value)} />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" name="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="flex justify-center">
                  <Button type="submit" variant="outline">Log In</Button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default LoginPage;
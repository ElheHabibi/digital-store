import { useState, type ChangeEvent } from "react";
import Button from "../../components/button/Button";
import Container from "../../components/container/Container";
import { useAuthContext } from "../../context/AuthContext";

function Login() {
  const { handleLogin } = useAuthContext();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div className="bg-background min-h-[calc(100vh-61px)] flex items-center py-12">
      <Container>
        <div className="max-w-sm mx-auto bg-surface border border-border rounded p-8">
          <p className="text-xs tracking-[0.15em] text-accent mb-1 text-center">
            *** SIGN IN ***
          </p>
          <h1 className="text-xl font-bold text-foreground mb-6 text-center">
            Welcome back
          </h1>

          <div className="flex flex-col gap-4">
            <input
              onChange={handleChange}
              type="text"
              placeholder="Username"
              className="rounded p-3 bg-background border border-border text-foreground text-sm placeholder:text-muted focus:outline-none focus:border-accent"
              name="username"
              value={user.username}
            />
            <input
              onChange={handleChange}
              type="password"
              placeholder="Password"
              className="rounded p-3 bg-background border border-border text-foreground text-sm placeholder:text-muted focus:outline-none focus:border-accent"
              name="password"
              value={user.password}
            />
            <Button
              variant="primary"
              onClick={() => {
                handleLogin(user.username, user.password);
              }}
            >
              Login
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Login;
import { useState, type ChangeEvent} from "react";
import Button from "../../components/button/Button";
import Container from "../../components/container/Container";
import { useAuthContext } from "../../context/AuthContext";

function Login() {
  const { handleLogin } = useAuthContext();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

const handleChange = (e: ChangeEvent<HTMLInputElement>)=> {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div>
      <Container>
        <div className="bg-slate-400 p-12 rounded flex flex-col gap-4 outline mt-10">
          <input
            onChange={handleChange}
            type="text"
            placeholder="username"
            className="rounded p-4 outline"
            name="username"
            value={user.username}
          />
          <input
            onChange={handleChange}
            type="password"
            placeholder="password"
            className="rounded p-4 outline"
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
      </Container>
    </div>
  );
}

export default Login;

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

const handleChange = (e: ChangeEvent<HTMLInputElement>)=> {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <Container>
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-100">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome Back!
            </h1>
            <p className="text-gray-600">
              Sign in to your account to continue shopping
            </p>
          </div>

          <form
            className="bg-white rounded-lg shadow-md p-8 space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin(user.username, user.password);
            }}
          >
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Username
              </label>
              <input
                id="username"
                onChange={handleChange}
                type="text"
                placeholder="Enter your username"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                name="username"
                value={user.username}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <input
                id="password"
                onChange={handleChange}
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                name="password"
                value={user.password}
              />
            </div>

            <Button
              variant="primary"
              onClick={() => {
                handleLogin(user.username, user.password);
              }}
              className="w-full py-3 mt-8"
            >
              Sign In
            </Button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            <span>Don't have an account? </span>
            <a
              href="#"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Sign up here
            </a>
          </p>
        </div>
      </div>
    </Container>
  );
}

export default Login;

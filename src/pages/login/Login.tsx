import Button from '../../components/button/Button'
import Container from '../../components/container/Container'
import { useAuthContext } from '../../context/AuthContext'

function Login() {
    const {handleLogin} = useAuthContext();
  return (
    <div>
      <Container>
        <div className='bg-slate-400 p-12 rounded flex flex-col gap-4 outline mt-10'>
        <input type='text' placeholder='username'className='rounded p-4 outline'/>
        <input type='password' placeholder='password'className='rounded p-4 outline'/>
        <Button variant='primary' onClick={handleLogin}>Login</Button>
        </div>
      </Container>
    </div>
  )
}

export default Login

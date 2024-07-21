const App = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');

    const register = async () => {
        try {
            await axios.post('http://localhost:3001/register', { username, password });
            alert('User registered');
        } catch (err) {
            alert('Error registering user');
        }
    };

    const login = async () => {
        try {
            const response = await axios.post('http://localhost:3001/login', { username, password });
            setToken(response.data.token);
            alert('User logged in');
        } catch (err) {
            alert('Invalid credentials');
        }
    };

    const accessProtected = async () => {
        try {
            const response = await axios.get('http://localhost:3004/protected', {
                headers: {
                    Authorization: token
                }
            });
            alert(response.data);
        } catch (err) {
            alert('Error accessing protected route');
        }
    };

    return (
        <div>
            <h1>Authentication Demo</h1>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={register}>Register</button>
            <button onClick={login}>Login</button>
            <button onClick={accessProtected}>Access Protected Route</button>
        </div>
    );
};
window.onload = function () {
    google.accounts.id.initialize({
      client_id: 'YOUR_GOOGLE_CLIENT_ID',
      callback: handleCredentialResponse
    });
    google.accounts.id.prompt();
  };

export default App;
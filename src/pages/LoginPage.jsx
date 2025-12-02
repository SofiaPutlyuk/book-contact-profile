export const LoginPage = () => {
    return(
        <form>
            <h1>Login</h1>
            <label>
                Name
                <input type="text" placeholder="Name" />
            </label>
            <label>
                Email
                <input type="email" placeholder="Email" />
            </label>
            <label>
                Password
                <input type="password" placeholder="Password" />
            </label>
            <button>Login</button>
        </form>
    )
}
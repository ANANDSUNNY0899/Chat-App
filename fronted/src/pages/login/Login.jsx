import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { loading, login } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password);  // ✅ Calls login function with username & password
    };

    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-white/30 backdrop-blur-sm">
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Login <span className="text-blue-500">ChatApp</span>
                </h1>

                <form onSubmit={handleSubmit}>  {/* ✅ Added onSubmit */}
                    <div>
                        <label className="label p-5">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter username"
                            className="w-full input-border h-10 bg-gray-700 rounded-sm"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}  // ✅ Added onChange
                        />
                    </div>

                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Enter Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            className="w-full input-border h-10 bg-gray-700 rounded-sm"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}  // ✅ Added onChange
                        />
                    </div>

                    <Link to="/signup" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
                        {"Don't"} have an account?
                    </Link>

                    <div>
                        <button
                            type="submit"
                            className="btn btn-block btn-sm mt-2 w-full input-border h-10 bg-gray-700 rounded-sm"
                            disabled={loading}
                        >
                            {loading ? <span className="loading loading-spinner"></span> : "Login"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;

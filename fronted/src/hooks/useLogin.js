import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();
    const navigate = useNavigate();

    const login = async (username, password) => {  // ✅ Corrected function name
        setLoading(true);
        try {
            const res = await fetch("/api/auth/login", {  // ✅ Fixed API endpoint typo
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }

            localStorage.setItem("chat-user", JSON.stringify(data));  // ✅ Store user data
            setAuthUser(data);  // ✅ Update auth context
            toast.success("Logged in successfully!");
            navigate("/");  // ✅ Redirect to home after login
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, login };  // ✅ Ensure login function is returned
};

export default useLogin;

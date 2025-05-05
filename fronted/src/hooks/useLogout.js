// import { useState } from "react"
// import { useAuthContext } from "../context/AuthContext";
// import toast from "react-hot-toast";
// import { TiArrowUpThick } from "react-icons/ti";

// const useLogout = () => {
//     const [loading, setLoading] = useState(false);
//     const { setAuthUser } = useAuthContext();

//     const logout = async () => {
//         setLoading(true)
//         try {
//             const res = await fetch("api/auth/logout", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json"},
//             });
//             const data = await res.json()
//             if(data.error){
//                 throw new Error(data.error);
//             }

//             localStorage.removeItem("chat-user");
//             setAuthUser(null);
//         } catch (error) {
//             toast.error(error.message);
//         } finally{
//             setLoading(false)
//         }
//     };
//     return { loading, logout };
// }
// export default useLogout;








import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";  // ✅ Import useNavigate for redirection
import toast from "react-hot-toast";

const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();
    const navigate = useNavigate();  // ✅ Initialize navigation

    const logout = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/auth/logout", {  // ✅ Ensure API URL is correct
                method: "POST",
                headers: { "Content-Type": "application/json" },
            });

            if (!res.ok) {
                throw new Error("Logout failed");
            }

            localStorage.removeItem("chat-user");  // ✅ Clear user data
            setAuthUser(null);
            toast.success("Logged out successfully!");

            navigate("/login");  // ✅ Redirect to login after logout
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, logout };
};

export default useLogout;

import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const navigate = useNavigate();


    //login
    const login = async (formData) => {
        const response = await fetch(`http://localhost:5001/users?email=${formData.email}&password=${formData.password}`, { method: "GET" });
        const users = await response.json();
        if (users.length > 0) {
            localStorage.setItem("todoUser", JSON.stringify(users[0]));
            setUser(users[0]);
            navigate("/task-list")
        } else {
            alert("email/password incorrect");
        }
    }


    //register
    const register = async (formData) => {
        // fetch()
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }

        const checkUser = await fetch(`http://localhost:5001/users?email=${formData.email}`, { method: "GET" });
        const users = await checkUser.json();
        if (users.length > 0) {
            alert("user already exist, please login");
        } else {
            const response = await fetch("http://localhost:5001/users", config);
            if (response.status === 201) {
                const user = await response.json();
                localStorage.setItem("todoUser", JSON.stringify(user));
                setUser(user);
                navigate("/task-list");
            } else {
                alert("Something went wrong");
            }
        }
    }

    const getUserFromDatabase = async (email) => {
        const response = await fetch(`http://localhost:5001/users?email=${email}`);
        if (response.ok) {
            const user = await response.json();
            if (user.length > 0) {
                setUser(user[0]);
            } else {
                localStorage.removeItem("todoUser");
            }
        }
    }


    const logout = () => {
        localStorage.removeItem("todoUser");
        setUser(null);
        navigate("/");
    }



    useEffect(() => {
        const localUser = JSON.parse(localStorage.getItem("todoUser"));
        if (localUser) {
            getUserFromDatabase(localUser.email);
        }
    }, [])





    return (
        <AuthContext.Provider value={{
            user,
            login,
            register,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext;
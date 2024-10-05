import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const getUserFromDatabase = async (email) => {
        const response = await fetch(`http://localhost:5000/users?email=${email}`);
        if (response.ok) {
            const user = await response.json();
            if (user.length > 0) {
                setIsLoggedIn(true);
            } else {
                localStorage.removeItem("todoUser");
                navigate("/login");
            }
        }
    }


    useEffect(() => {
        const localUser = JSON.parse(localStorage.getItem("todoUser"));
        if (localUser) {
            getUserFromDatabase(localUser.email);
        } else {
            navigate("/login");
        }
    }, [])


    return (
        isLoggedIn ? children : null
    );
}

export default ProtectedRoute;
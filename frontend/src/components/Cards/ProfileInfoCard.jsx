import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import AvatarImage from '../../assets/avatar.png';
const ProfileInfoCard = () => {
    const { user, clearUser } = useContext(UserContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear();
        clearUser();
        navigate("/");
    };
    return (
        user && (
        <div className="flex items-center">
            <img
                src={user.profileImageUrl  || AvatarImage}
                alt="Profile"
                className="w-10 h-10 bg-gray-300 rounded-full mr-3"
            />
            <div>

            <div className="text-[15px] text-black font-bold leading-3">
                {user.name || ""}
            </div>

            <button
                className="text-sm text-amber-600 font-semibold cursor-pointer hover:underline"
                onClick={handleLogout}
            >
                Logout
            </button>
            </div>
        </div>
        )
    )
}

export default ProfileInfoCard
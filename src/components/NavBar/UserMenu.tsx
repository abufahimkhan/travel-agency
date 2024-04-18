import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FcPortraitMode } from "react-icons/fc";
interface UserCardProps {
  // avatarSrc: string;
  name: string;
}

const UserCard: React.FC<UserCardProps> = ({ name}) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectChange = (option: string) => {
    setIsOpen(false);
    if (option === "dashboard") {
      // Navigate to dashboard page
    } else if (option === "logout") {
      navigate("/");
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center" onClick={toggleDropdown}>
        <div className="relative">
        <FcPortraitMode className="h-5 w-5 rounded-full object-cover cursor-pointer"/>
          {/* <img
            className="h-5 w-6 rounded-full object-cover cursor-pointer"
            src={avatarSrc}
            alt="Avatar"
          /> */}
          <div className="absolute inset-0 rounded-full shadow-inner"></div>
        </div>
        <div className="ml-3">
          <h2 className="font-bold text-gray-800 text-xs">{name}</h2>
          {/* <p className="text-gray-600 text-sm">{jobTitle}</p> */}
        </div>
      </div>
      {isOpen && (
        <div className="absolute mt-2 w-40 bg-white rounded-md shadow-lg z-10">
          <ul>
            <li>
              <Link
                to="/dashboard"
                onClick={() => handleSelectChange("dashboard")}
                className="block py-2 px-4 text-gray-800 hover:bg-gray-200"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <button
                onClick={() => handleSelectChange("logout")}
                className="block w-full py-2 px-4 text-left text-gray-800 hover:bg-gray-200"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserCard;

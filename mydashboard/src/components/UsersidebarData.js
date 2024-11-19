import { FaHome, FaBell, FaSearch, FaEnvelope, FaCog, FaSignOutAlt, FaUserShield } from 'react-icons/fa'; // Importing specific icons from react-icons

export const UsersidebarData = [
    {
        title: "Home",
        icon: <FaHome />,   // Icon for Home
        link: "/Home"
    },
    {
        title: "Notification",
        icon: <FaBell />,   // Icon for Notifications
        link: "/Notification"
    },
    {
        title: "Search",
        icon: <FaSearch />,    // Icon for Search
        link: "/Search"
    },
    {
        title: "Messages",
        icon: <FaEnvelope />,   // Icon for Messages
        link: "/Messages"
    },
    {
        title: "Settings",
        icon: <FaCog />,    // Icon for Settings
        link: "/Settings"
    },
    {
        title: "Log Out",
        icon: <FaSignOutAlt />,    // Icon for Log Out
        link: "/Logout"
    },
    {
        title: "Account Privacy",
        icon: <FaUserShield />,    // Icon for Account Privacy
        link: "/AccountPrivacy"
    }
];

import { FaHome, FaUser, FaSignInAlt, FaListAlt, FaUserPlus } from 'react-icons/fa'; // Importing specific icons from react-icons

export const SidebarData = [
    {
        title: "Dashboard",
        icon: <FaHome />,   // Icon for Dashboard
        link: "/Dashboard"
    },
    {
        title: "Login",
        icon: <FaSignInAlt />,   // Icon for Login Page
        link: "/LoginPage"
    },
    {
        title: "Profile ",
        icon: <FaUser />,    // Icon for Profile Page
        link: "/ProfilePage"
    },
    {
        title: "User List",
        icon: <FaListAlt />,   // Icon for User List Page
        link: "/UserListPage"
    },
    {
        title: "Sign Up",
        icon: <FaUserPlus />,    // Icon for Sign Up Page
        link: "/SignUpPage"
    }
];

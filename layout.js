import NavBar from "./components/NavBar";

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen  bg-gray-50">
            <NavBar />
            <div >{children}</div>
        </div>
    );
};

export default Layout;

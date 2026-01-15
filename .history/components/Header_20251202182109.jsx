import React from "react";
import Logo from "./Logo";

const Header = () => {
    return (
        <header className="2xl:hidden absolute z-40 left-0 top-0 right-0">
            <div className="container mx-auto">
                <div>
                    {/* logo */}
                    <Logo />
                    {/* nav mobile - (Sheet Component) */}
                </div>
            </div>
        </header>
    );
};

export default Header;
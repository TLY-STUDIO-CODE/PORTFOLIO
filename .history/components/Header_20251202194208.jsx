import Logo from "./Logo";
import Socials from "./Socials";
import { CiMenuFries } from "react-icons/ci";

import { 
    Sheet, 
    SheetContent, 
    SheetDescription, 
    SheetHeader, 
    SheetTitle, 
    SheetTrigger 
} from "@/components/ui/sheet";

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
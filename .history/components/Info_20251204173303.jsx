
import { 
    HiOutlineMail, 
    HiOutlinePhone, 
    HiOutlineUser, 
    HiOutlineLocationMarker,
} from "react-icons/hi";

const Info = () => {
    return (
    <div className="flex flex-col gap-6 md:gap-10">
        <div className="flex flex-col md:flex-row gap-4">
            <div className="w-[280px] flex items-start gap-4">
                <HiOutlineUser className="text-2xl mt-1 text-accent"/>
                <div>
                    <p className="text-lg">Date de naissance</p>
                    <p>02 Janvier 2001</p>
                </div>
            </div>
            <div className="w-[280px] flex items-start gap-4">
                <HiOutlineMail className="text-2xl mt-1 text-accent"/>
                <div>
                    <p className="text-lg">Adresse e-mail</p>
                    <p>tsilaky01@gmail.com</p>
                </div>
            </div>
        </div>
        <div>2</div>
    </div>
    );
};

export default Info;
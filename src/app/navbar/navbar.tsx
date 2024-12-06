import AppName from "@/app/navbar/appName";
import CustomWallet from "@/app/navbar/customWallet";
import Profile from "@/app/navbar/profile";

interface NavbarProps {
    walletAddress?: string
}

const Navbar: React.FC<NavbarProps> = ({ walletAddress }) => {
    return (
        <div>

            <AppName></AppName>
            <CustomWallet></CustomWallet>
            <Profile></Profile>
            <div>{walletAddress}</div>
        </div>
    );
}

export default Navbar;
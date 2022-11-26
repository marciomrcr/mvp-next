// import Image from "next/image";
// import logo from "../../public/logo.png";
//       <div className="bg-gray-800 flex justify-items-center p-2">
//         <Image
//           src={logo}
//           alt="Picture of notification"
//           width={130}
//           height={114}
//         />
//       </div>

import AppsIcon from "@mui/icons-material/Apps";
import CropLandscapeIcon from "@mui/icons-material/CropLandscape";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const Header = () => {
  return (
    <div className="flex shadow-sm bg-gray-50  p-4 justify-between  ">
      <div className="flex space-x-3  ">
        <p className="text-gray-400">Endereço </p>
        <p>Tv Teófilo Condurú, 100</p>
        <CropLandscapeIcon className="text-gray-300" />
        <DashboardIcon className="text-gray-300" />
      </div>
      <div className="flex space-x-4 text-gray-400 mr-3">
        <AppsIcon />
        <ExitToAppIcon />
        <p className="text-gray-600 font-semibold">Close</p>
      </div>
    </div>
  );
};

export default Header;

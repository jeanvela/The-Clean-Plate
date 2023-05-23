import { Link } from "react-router-dom";
import { RiDashboardLine, RiStore3Fill, RiFolderUserLine } from "react-icons/ri";
const Dashboard = () => {
    return (
      <div className="min-h-screen grid grid-cols-6">

       <div className="col-span-1 p-8">
        <div className=" text-ceneter p-8 ">
          <h1 className="uppercase font-bold tracking-[4px]">The Clean Plate</h1>
        </div>
        <nav>
          <ul>
            <li>
            <Link to="">
            <div className="flex items-center gap-4 text-gray-500 hover:bg-yellow-200 p-4 hover:text-black rounded-lg transition-colors">
              <RiDashboardLine/>
              Dashboard
            </div>
          </Link>
            </li>
            <li>
            <Link to="">
            <div className="flex items-center gap-4 text-gray-500 hover:bg-yellow-200 p-4 hover:text-black rounded-lg transition-colors">
              <RiStore3Fill/>
              Products
            </div>
          </Link>
            </li>
            <li>
            <Link to="">
            <div className="flex items-center gap-4 text-gray-500 hover:bg-yellow-200 p-4 hover:text-black rounded-lg transition-colors">
              <RiFolderUserLine/>
              Users
            </div>
          </Link>
            </li>
          </ul>
        </nav>
       </div>
       <div className="col-span-5 bg-blue-400"></div>
       
      </div>
    );
  };
  
  export default Dashboard;
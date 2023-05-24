import SideBar from "../Dashboard/SideBar";
const Dashboard = () => {
    return (
      <div className="grid grid-cols-6">
          <SideBar/>
          <div className="col-span-5 bg-yellow-200" ></div>
      </div>
    );
  };
  
  export default Dashboard;
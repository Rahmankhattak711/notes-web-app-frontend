import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar";
import Hero from "./Hero";

const Dashboard = ({ user }: any) => {
  return (
    <section className="w-full h-screen flex">
      <SideBar />
      <div className="flex flex-col flex-1">
        <Header />
        <Hero />
      </div>
    </section>
  );
};

export default Dashboard;

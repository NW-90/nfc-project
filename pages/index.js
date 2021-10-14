import Header from "../components/Header";
import UserInfo from "../components/UserInfo";
export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="">
        <UserInfo />
      </div>
    </div>
  );
}

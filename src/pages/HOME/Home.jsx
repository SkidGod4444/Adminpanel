import Charts from "../../components/CHARTS/Charts"
import Featuredinfo from "../../components/FEATUREDINFO/Featuredinfo"
import "./home.css"
import {userData} from "../../dummyData"

export default function Home() {
  return (
    <div className="home">
    <Featuredinfo />
    <Charts data={userData} title="User Analytics" grid dataKey="Active Users" />
    <div className="homeWidgets"></div>
    </div>
  )
}

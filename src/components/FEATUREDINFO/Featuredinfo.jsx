import "./featuredinfo.css"
import {TrendingDownTwoTone} from '@mui/icons-material';

export default function Featuredinfo() {
  return (
    <div className="featured">
    <div className="featuredItem">
        <span className="featuredTite">Revenue</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,415</span>
            <span className="featuredMoneyRate">-11.4 <TrendingDownTwoTone className="featuredIcon negative" /></span>
            </div>
            <span className="featuredSub">Compared to last month</span>
            
    </div>
    </div>
  )
}

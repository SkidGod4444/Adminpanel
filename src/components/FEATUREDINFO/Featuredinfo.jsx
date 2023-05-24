import "./featuredinfo.css"
import {TrendingDownTwoTone, TrendingUpTwoTone} from '@mui/icons-material';

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
    <div className="featuredItem">
        <span className="featuredTite">Sales</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$20,415</span>
            <span className="featuredMoneyRate">-31.4 <TrendingDownTwoTone className="featuredIcon negative" /></span>
            </div>
            <span className="featuredSub">Compared to last month</span>   
    </div>
    <div className="featuredItem">
        <span className="featuredTite">Cost</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,415</span>
            <span className="featuredMoneyRate">+101.4 <TrendingUpTwoTone className="featuredIcon" /></span>
            </div>
            <span className="featuredSub">Compared to last month</span>   
    </div>
    </div>
  )
}

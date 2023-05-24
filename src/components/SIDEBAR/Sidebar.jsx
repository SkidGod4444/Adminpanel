import "./sidebar.css"
import {HouseTwoTone, LibraryBooksTwoTone, TimelineTwoTone, TrendingUpTwoTone} from '@mui/icons-material';

export default function Sidebar() {
  return (
    <div className="sidebar">
    <div className="sidebarWrapper">
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">DASHBOARD</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <HouseTwoTone className="sidebarIcon" />
                    Home
            </li>
            <li className="sidebarListItem">
                    <TimelineTwoTone className="sidebarIcon" />
                    Analytics
            </li>
            <li className="sidebarListItem">
                    <TrendingUpTwoTone className="sidebarIcon" />
                    Sales
            </li>
            <li className="sidebarListItem">
                    <LibraryBooksTwoTone className="sidebarIcon" />
                    Logs
            </li>
            </ul> 
        </div>
    </div>
    </div>
  )
}

import "./sidebar.css"
import {PeopleAltTwoTone, StorefrontTwoTone, CreditScoreTwoTone, ReportGmailerrorredTwoTone, AttachEmailTwoTone, ForumTwoTone, SendTwoTone, ManageHistoryTwoTone, EqualizerTwoTone, TipsAndUpdatesTwoTone, HouseTwoTone, LibraryBooksTwoTone, TimelineTwoTone, TrendingUpTwoTone} from '@mui/icons-material';

export default function Sidebar() {
  return (
    <div className="sidebar">
    <div className="sidebarWrapper">
        <div className="sidebarMenu">
            <h4 className="sidebarTitle">DASHBOARD</h4>
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
        <div className="sidebarMenu">
            <h4 className="sidebarTitle">QUICK MENU</h4>
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <PeopleAltTwoTone className="sidebarIcon" />
                        Users
            </li>
            <li className="sidebarListItem">
                    <StorefrontTwoTone className="sidebarIcon" />
                        Products
            </li>
            <li className="sidebarListItem">
                    <CreditScoreTwoTone className="sidebarIcon" />
                        Transactions
            </li>
            <li className="sidebarListItem">
                    <ReportGmailerrorredTwoTone className="sidebarIcon" />
                        Reports
            </li>
            </ul> 
        </div>
        <div className="sidebarMenu">
            <h4 className="sidebarTitle">NOTIFICATIONS</h4>
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <AttachEmailTwoTone className="sidebarIcon" />
                        Mails
            </li>
            <li className="sidebarListItem">
                    <ForumTwoTone className="sidebarIcon" />
                        Feedback
            </li>
            <li className="sidebarListItem">
                    <SendTwoTone className="sidebarIcon" />
                        Messages
            </li>
            </ul> 
        </div>
        <div className="sidebarMenu">
            <h4 className="sidebarTitle">OFFICIAL</h4>
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <ManageHistoryTwoTone className="sidebarIcon" />
                        Manage
            </li>
            <li className="sidebarListItem">
                    <EqualizerTwoTone className="sidebarIcon" />
                        Analytics
            </li>
            <li className="sidebarListItem">
                    <TipsAndUpdatesTwoTone className="sidebarIcon" />
                        Updates
            </li>
            </ul> 
        </div>
        </div>
    </div>

  )
}

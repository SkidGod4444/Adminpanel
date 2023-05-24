import { Link } from "react-router-dom"
import "./user.css"
import { CalendarTodayTwoTone, WorkTwoTone, PublishTwoTone, LocationSearchingTwoTone, MailOutlineTwoTone, PermIdentityTwoTone, PhoneAndroidTwoTone } from '@mui/icons-material'

export default function User() {
  return (
    <div className="user">
    <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUserSpawned">
        <button className="userAddButton">Create</button>
        </Link>
    </div>
    <div className="userContainer">
        <div className="userShow">
            <div className="userShowTop">
                <img src="https://i.pinimg.com/originals/d1/d8/68/d1d8681e334080f372a9320def27dd62.jpg" alt="" className="userShowImg" />
                <div className="userShowTopTitle">
                    <span className="userShowUsername">Riya Randi</span>
                    <span className="userShowUserTitle">Software Engineer</span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">User Details</span>
                    <div className="userShowInfo">
                    <PermIdentityTwoTone className="userShowIcon" />
                        <span className="userShowInfoTitle">Riya Ali Khan</span>
                        </div>
                        <div className="userShowInfo">
                    <CalendarTodayTwoTone className="userShowIcon" />
                        <span className="userShowInfoTitle">13/04/2006</span>
                        </div>
                        <div className="userShowInfo">
                    <WorkTwoTone className="userShowIcon" />
                        <span className="userShowInfoTitle">Software Engineer</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                    <PhoneAndroidTwoTone className="userShowIcon" />
                        <span className="userShowInfoTitle">+917846944591</span>
                        </div>
                        <div className="userShowInfo">
                    <MailOutlineTwoTone className="userShowIcon" />
                        <span className="userShowInfoTitle">riyaali@yahoo.com</span>
                        </div>
                        <div className="userShowInfo">
                    <LocationSearchingTwoTone className="userShowIcon" />
                        <span className="userShowInfoTitle">New Delhi | India</span>
                        </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>Username</label>
                            <input type="text" placeholder="Riya Randi" className="userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label>Full Name</label>
                            <input type="text" placeholder="Riya Ali Khan" className="userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label>Birth Date</label>
                            <input type="text" placeholder="13/04/2006" className="userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label>Work</label>
                            <input type="text" placeholder="Software Engineer" className="userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label>Email</label>
                            <input type="text" placeholder="riyaali@yahoo.com" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                            <label>Phone</label>
                            <input type="text" placeholder="+917846944591" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                            <label>Address</label>
                            <input type="text" placeholder="New Delhi | India" className="userUpdateInput" />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="https://i.pinimg.com/originals/d1/d8/68/d1d8681e334080f372a9320def27dd62.jpg" alt="" className="userUpdateImg" />
                                <label htmlFor="file"><PublishTwoTone className="userUpdateIcon" /></label>
                                <input type="file" id="file" style={{display:"none"}} />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                        </form>
                </div>
         </div>
    </div>
  )
}

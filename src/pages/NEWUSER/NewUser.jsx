
import "./newUser.css"

export default function NewUser() {
  return (
    <div className="newUser">
        <h1 className="newUserTitle">New User</h1>
        <form className="newUserForm">
            <div className="newUserItem">
                <label>Username</label>
                <input type="text" placeholder="john" />
                </div>
                <div className="newUserItem">
                <label>Full Name</label>
                <input type="text" placeholder="John Smith" />
                </div>
                <div className="newUserItem">
                <label>Email</label>
                <input type="email" placeholder="john@gmail.com" />
                </div>
                <div className="newUserItem">
                <label>Password</label>
                <input type="password" placeholder="password" />
                </div>
                <div className="newUserItem">
                <label>Phone</label>
                <input type="text" placeholder="+1 123 456 78" />
                </div>
                <div className="newUserItem">
                <label>Address</label>
                <input type="text" placeholder="New York | USA" />
                </div>
                <div className="newUserItem">
                <label>Gender</label>
                <div className="newUserGender">
                <input type="radio" name="gender" id="Male" value="Male" />
                <label for="Male">Male</label>
                <input type="radio" name="gender" id="FeMale" value="FeMale" />
                <label for="FeMale">Female</label>
                <input type="radio" name="gender" id="Others" value="Others" />
                <label for="Others">Others</label>
                </div>
                </div>
                <div className="newUserItem">
                <label>Active</label>
                <select className="newUserSelect" name="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="idk">Idk</option>
                </select>
                </div>
                <button className="newUserButton">Done</button>
                </form>

    </div>
  )
}

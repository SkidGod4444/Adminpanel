import React from 'react'
import './topbar.css'
import {NotificationsNoneTwoTone, GTranslateTwoTone, SettingsTwoTone} from '@mui/icons-material';


export default function Topbar() {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topLeft'>
                <span className='logo'>ADMINPANEL</span>
                </div>
                <div className='topRight'>
                <div className='topbarIconContainer'>
                        <NotificationsNoneTwoTone />
                        <span className='topIconBadge'>2</span>
                        </div>
                        <div className='topbarIconContainer'>
                        <GTranslateTwoTone />
                        <span className='topIconBadge'>2</span>
                        </div>
                        <div className='topbarIconContainer'>
                        <SettingsTwoTone />
                        <span className='topIconBadge'>2</span>
                        </div>
                        <img src="https://i.pinimg.com/originals/30/b4/8c/30b48c897098bd6b89a2ea7509421b41.jpg" alt='' className='topAvatar' />
                        </div>
                        </div>
    </div>
  )
}

import React from 'react'
import Logo from '../images/support.svg'
import Profile from '../images/profile.png'

const FriendList = () => {

  return (
<div className='friendList'>
      <div className='logoContainer'>
        <img src={Logo} alt="logo"/>
        <h2 className='kontakti'>Kontakti</h2>
      </div>
    <div className='friendsContainer'>
        <ul>
            <li>
                <img src={Profile} alt="profile1" />
                <a>Zorz Zorzic</a>
            </li>
            <li>
                <img src={Profile} alt="profile2" />
                <a href="">Zorz Zorzina</a>
            </li>
        </ul>
    </div>
</div>
)
}

export default FriendList

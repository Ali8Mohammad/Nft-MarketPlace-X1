import React from 'react'
import './SocialMediaLink.css';

export default function SocialMediaLink({ ysShowLink }) {
  return (
    <>
      <ul className='ys-myul'>
        {ysShowLink && (
          <li>
            <a href='https://www.animaapp.com'>
              <img src="../../../public/Images/icons/Globe.svg" className={!ysShowLink ? 'ys-myicon-web-li-a-none' : 'ys-myicon-li-a'} />
            </a>
          </li>
        )}
        <li><a href='https://discord.com/invite/eQxkYTNxSp'><img src="../../../public/Images/icons/DiscordLogo.svg" className={!ysShowLink ? '' : 'ys-myicon-li-a'} /></a></li>
        <li><a href='https://www.youtube.com/channel/UCXqr0Ca-b73rU9zcpSBJ5cw'><img src="../../../public/Images/icons/YoutubeLogo.svg" className={!ysShowLink ? '' : 'ys-myicon-li-a'} /></a></li>
        <li><a href='https://twitter.com/animaapp?lang=en'><img src="../../../public/Images/icons/TwitterLogo.svg" className={!ysShowLink ? '' : 'ys-myicon-li-a'} /></a></li>
        <li><a href='https://www.instagram.com/animaapp/?hl=en'><img src="../../../public/Images/icons/InstagramLogo.svg" className={!ysShowLink ? '' : 'ys-myicon-li-a'} /></a></li>
      </ul>
    </>
  )
}

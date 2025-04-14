import React from 'react'
import avatarImg from '../../assets/images/picture_one.png'


const HomeAvatar = () => {
  return (
    <div className="rounded-full border-r-2 border-l-2 border-gray shadow-normal overflow-clip size-[38vh] p-[0.5rem]">
      <img className="hover:scale-105 transition-all duration-500 size-[37vh]" src={avatarImg} alt="" />
      </div>
  )
}

export default HomeAvatar

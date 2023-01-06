import { Button, Dropdown } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import './HeaderMovie.css'
const HeaderMovie = () => {
    const profile = useSelector(state => state.user.profile)
    const items=  [
        {
            key: '1',
            label: (
                <Link className='font-bold ' to={'/inforuser'}>  Info</Link>
            ),
        },
        {
            key: '2',
            label: (
               
                  <Link className='font-bold ' to={'/admin'}>  Admin</Link>
                
            ),
        }
       ]
    return (
        <header className='flex justify-between items-center bg-[#141414] text-white'>
            <div className='flex px-5'>
                <Link to="/"><img className='cursor-pointer' width={150} alt='' src='https://demo1.cybersoft.edu.vn/logo.png'></img></Link>
                <ul className='group_navbar space-x-10 list-none hidden md:flex'>
                    <li className='linkHeader'>Lịch chiếu</li>
                    <li className='linkHeader'>Cụm rạp</li>
                    <li className='linkHeader'>Tin Tức</li>
                    <li className='linkHeader'>Ứng dụng</li>
                </ul>
            </div>

            {profile ? <span className='text-white mr-10' > Xin chào : {profile.hoTen} <Dropdown
                menu={{
                 items,
                }}

                placement="bottom"
                arrow
            >
                <Button size='small' type='primary'><i class="fa-solid fa-user"></i></Button>
            </Dropdown></span> : <div className='mr-5 cursor-pointer '>
                <NavLink to="/login" className={({ isActive }) => isActive ? 'text-3xl no-underline text-white' : 'text-white no-underline'} > <span className='hover:text-[#b3b3b3]'>Đăng nhập</span></NavLink>
                <NavLink to='/sign' className={({ isActive }) => isActive ? 'text-3xl no-underline text-white' : 'text-white no-underline'} > <span className='hover:text-[#b3b3b3]'> | Đăng kí</span></NavLink>
            </div>
            }
            <div id='icon' className=' cursor-pointer mr-5 inline md:hidden'>
                <i class="fa-solid fa-bars"></i>
            </div>
        </header >
    )
}

export default HeaderMovie

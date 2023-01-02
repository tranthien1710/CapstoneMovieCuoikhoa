import React from 'react'
import { Carousel } from 'antd';
import { useSelector } from 'react-redux';

const BannerMovie = () => {
    const banner = useSelector(state => state.booking.Banners)
    return (
        <div>
            <Carousel>
              {banner.map((item)=>{
                return <div key={item.maPhim}>
                    <img className='object-cover w-full ' height="880px" src={item.hinhAnh} alt="" />
                </div>
              })}
            </Carousel>
        </div>
    )
}

export default BannerMovie

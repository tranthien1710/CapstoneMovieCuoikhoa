import { Col, Row, Tabs } from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchScheduleCinemaAction } from '../redux/action';
import { getInfoScheduleCinema } from './serviceBooking';

const ScheduleCinema = () => {
    const dispatch = useDispatch();
    const [listCinema, setlistCinema] = useState([])
    const listSheduleCinema = useSelector(state => state.booking.listScheduleCinema)
    
    useEffect(() => {
       
        getInfoScheduleCinema(listSheduleCinema[0]?.maHeThongRap).then(res => setlistCinema(res.data.content))
    }, [listSheduleCinema])
    
    return (
        <div className='container mx-auto'>
            <Tabs
                onChange={(key) => getInfoScheduleCinema(key).then(res => setlistCinema(res.data.content))}
                tabPosition={'left'}
                items={listSheduleCinema?.map((item) => {
                    return {
                        label: <img width={"80px"} src={item.logo} alt="" />,
                        key: item.maHeThongRap,
                        children: <Tabs
                            tabPosition={'left'}
                            items={listCinema && listCinema.length > 0 && listCinema[0].lstCumRap.map((item) => {
                                return {
                                    label: <div><p className='text-left font-bold'>{item.tenCumRap}</p> <p className='text-left'>{item.diaChi}</p></div>,
                                    key: item.maCumRap,
                                    children: <div>{item.danhSachPhim.slice(0, 6).map((item) => {
                                        return <div key={item.maPhim} className="flex mb-2" >
                                            <img width={"100px"} height="100px" src={item.hinhAnh} alt="" />
                                            <div className='ml-2'>
                                                <h3 className='my-0'>{item.tenPhim}</h3>
                                              <Row gutter={[20,20]}>
                                              {item.lstLichChieuTheoPhim.slice(0, 4).map((item) => {
                                                    return <Col span={8} ><span>{moment(item.ngayChieuGioChieu).format("DD/MM/YYYY hh:mm")}</span></Col>
                                                })}
                                              </Row>
                                            </div>
                                        </div>
                                    })}</div>,
                                }
                            })
                            }
                        />,
                    }
                })}
            />
        </div>
    )
}

export default ScheduleCinema

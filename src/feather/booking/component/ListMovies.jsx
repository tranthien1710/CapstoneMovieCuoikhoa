import { Button, Col, Row } from 'antd'
import React from 'react'
import { Card, Pagination } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import './ListMovies.css'
import { fetchListMovieAction } from '../redux/action';
import actionType from '../redux/type';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
const ListMovies = () => {
    const listmovie = useSelector(state => state.booking.ListMovie)
    const dangchieu = useSelector(state => state.booking.DangChieu)
    
    const sapchieu = useSelector(state => state.booking.SapChieu)
    const dispatch = useDispatch()
    return (
        <div className='container mx-auto mt-20'>
            <div className='mb-5'><span onClick={() => {
                const action = { type: actionType.SHOW_SHOWING }
                dispatch(action)
            }}
                className={clsx('text-3xl font-bold p-5 bg-[#141414] text-white rounded cursor-pointer hover:text-[#b3b3b3] ', { 'bg-yellow-600':dangchieu })}>Đang Chiếu</span> <span onClick={() => {
                    dispatch({ type: actionType.SHOW_COMMING })
                }} className={clsx('text-3xl font-bold p-5 bg-[#141414] text-white rounded cursor-pointer hover:text-[#b3b3b3] ',{'bg-yellow-600':sapchieu})}>Sắp Chiếu</span></div>
            <Row gutter={[20, 20]}>
                {listmovie?.items?.map((item) => {
                    return (
                        <Col key={item.maPhim} xs={20} sm={16} md={12} lg={8} xl={6}>
                            <Card className='group_card'
                                hoverable
                                style={{
                                    width: "100%",
                                }}
                                cover={<img height={'500px'} alt="example" src={item.hinhAnh} />}
                            >
                                <div className='group_anime'></div>
                                <h3 className=' font-bold text-center'>{item.tenPhim}</h3>
                               <NavLink to={`/detail/${item.maPhim}`}> <div className=' text-center text-white bg-[#141414] font-bold h-10 flex justify-center items-center hover:text-black hover:bg-slate-800 uppercase'>Đặt vé</div></NavLink>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
            <Pagination
                onChange={(page) => {
                    dispatch(fetchListMovieAction(page))
                }}
                defaultCurrent={listmovie.currentPage} pageSize={+listmovie.count} total={listmovie.totalCount} />;
        </div>
    )
}

export default ListMovies

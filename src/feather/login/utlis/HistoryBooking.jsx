import { Col, Row } from 'antd'
import moment from 'moment'
import React from 'react'
import { useSelector } from 'react-redux'

const HistoryBooking = () => {
    const { thongTinDatVe } = useSelector(state => state.user.profile)

    return (
        thongTinDatVe && <div>
            <Row>
                {thongTinDatVe?.map((item) => {
                    return <Col xs={20} sm={16} md={12} lg={8} xl={6}>
                        <div className='flex'>
                            <img width={"100px"} height="150px" alt='' src={item.hinhAnh} />
                            <div className='ml-1'>
                                <h3 className='mt-0'>{item.tenPhim}</h3>
                                <p>{moment(item.ngayDat).format("DD/MM/YYYY hh:mm")}</p>
                                <div>{item.danhSachGhe?.slice(0, 4).map((item) => {
                                    return <p><span>{item.tenHeThongRap}-{item.tenCumRap}-{item.tenGhe}</span></p>
                                })}</div>
                            </div>
                        </div>
                    </Col>


                })}

            </Row>
        </div>
    )
}

export default HistoryBooking

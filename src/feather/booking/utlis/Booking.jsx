import { Button, Col, Row } from 'antd'
import moment from 'moment'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchBookedAction, fetchListTicketAction } from '../redux/action'
import './Booking.css'
import Chair from './Chair'
const Booking = () => {
  const dispatch = useDispatch()
  const param = useParams()
  const { thongTinPhim, danhSachGhe } = useSelector(state => state.booking.ListChair)
  const listbooking = useSelector(state => state.booking.listBooking)
  const flag = useSelector(state => state.booking.flag)
  useEffect(() => {
    dispatch(fetchListTicketAction(param.id))
  }, [flag])

  const booked = {
    maLichChieu: param.id,
    danhSachVe: listbooking,
  }
  return (
    <div style={{ marginTop: "100px" }}>
      <Row>
        <Col lg={16} md={24} >
          <div className='flex justify-center'>
            <div className='trapezoid'></div>

          </div>
          <div style={{ marginTop: "50px" }} className="mx-20" >
            <Row className='flex justify-center' gutter={[10, 10]}>
              {danhSachGhe?.slice(0, 99).map((item) => {
                return <Col span={2}>
                  <Chair chair={item} />
                </Col>
              })}
            </Row>
          </div>
        </Col>
        <Col lg={8} md={24} >
          <div className='p-5 shadow-2xl'>
            <div className='flex justify-between'><span className='font-bold'>Ngày chiếu giờ chiếu</span> <span>{thongTinPhim?.ngayChieu}~{thongTinPhim?.gioChieu}</span></div>
            <hr />
            <div className='flex justify-between'><span className='font-bold'>Cụm rạp</span> <span>{thongTinPhim?.tenCumRap}</span></div>
            <hr />
            <div className='flex justify-between'><span className='font-bold'>Rạp</span> <span>{thongTinPhim?.tenRap}</span></div>
            <hr />
            <table className='w-full border-spacing-3'>
              <thead>
                <tr>
                  <th className='text-left'>Chọn ghế</th>
                  <th className='text-right'>Giá</th>
                </tr>
              </thead>
              <tbody>
                {listbooking.map((item) => {
                  return <tr>
                    <td>{item.tenGhe}</td>
                    <td className='text-right'>{item.giaVe.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</td>
                  </tr>
                })}
              </tbody>
              <tfoot>
                <tr>
                  <th className='text-left'>Tổng tiền</th>
                  <th className='text-right'>{listbooking.reduce((total, item) => {
                    return total + item.giaVe
                  }, 0).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</th>
                </tr>
              </tfoot>
            </table>
            <div>
              <Button onClick={() => {
                dispatch(fetchBookedAction(booked))
              }} className='w-full' type='primary'>Thanh toán</Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Booking

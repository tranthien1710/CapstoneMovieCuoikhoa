import { Button } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import actionType from '../redux/type';
import './Chair.css'
import clsx from 'clsx'
const Chair = (props) => {
  const { chair } = props;
  const dispatch = useDispatch()
  const listbooking = useSelector(state => state.booking.listBooking)
  
  return (
    <Button
    className={clsx('chair', { "booking": listbooking.find(ele => ele.maGhe === chair.maGhe),"booked":chair.daDat })} disabled={chair.daDat}
     onClick={() => {
      dispatch({
        type: actionType.ADD_CHAIR_SELECTING,
        payload: chair
      })
    }} >
      <span > {chair.tenGhe}</span>
    </Button>
  )
}

export default Chair

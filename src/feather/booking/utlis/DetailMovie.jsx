import { Button, Col, Rate, Row, Modal, Tabs, Tag } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { fetchDetailMovieAction, fetchScheduleMovieAction } from '../redux/action'
import moment from 'moment'
const DetailMovie = () => {
    const [isOpenModal, setOpenModal] = useState(false)
    const OpemModal = () => {
        setOpenModal(true)
    }
    const CloseModal = () => {
        setOpenModal(false)
        var ifram = document.getElementById('contro_iframe')
        if (ifram) {
            var iframsrc = ifram.src;
            ifram.src = iframsrc
        }
    }
    const param = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchDetailMovieAction(param.id))
        dispatch(fetchScheduleMovieAction(param.id))
    }, [])
    const detail = useSelector(state => state.booking.DetailMovie)
    const schedulemovie = useSelector(state => state.booking.ScheduleMovie)
    return (
        detail && <div className='container mx-auto' style={{ marginTop: "100px" }}>
            <h1>Chi tiết phim</h1>
            <Row>
                <Col span={8}  >
                    <img width={"100%"} src={detail.hinhAnh} />
                </Col>
                <Col span={16}>
                    <table className='text-left' cellSpacing={5}>
                        <tbody>
                            <tr>
                                <th>Tên Phim</th>
                                <td>{detail.tenPhim}</td>
                            </tr>
                            <tr>
                                <th>Mô tả</th>
                                <td>{detail.moTa}</td>
                            </tr>
                            <tr>
                                <th>Đánh giá</th>
                                <td><Rate count={10} value={detail.danhGia}></Rate></td>
                            </tr>
                            <tr>
                                <th>Ngày khởi chiếu</th>
                                <td>{moment(detail.ngayKhoiChieu).format("DD/MM/YYYY hh:mm:ss")}</td>
                            </tr>
                            <tr>
                                <th></th>
                                <td><Button onClick={OpemModal} type='primary' size='large'>Xem Trailer</Button></td>
                            </tr>

                        </tbody>
                    </table>
                    <Tabs
                        tabPosition={"left"}
                        items={schedulemovie.heThongRapChieu?.map((item) => {
                            return {
                                label: <img width={"80px"} src={item.logo} alt="" />,
                                key: item.maHeThongRap,
                                children: <div>
                                    <p>   {item.tenHeThongRap}</p>
                                    <div>{item.cumRapChieu.map(item=>{
                                        return <div><p>{item.tenCumRap} {item.diaChi}</p>
                                        {item.lichChieuPhim.map(item=>{
                                            return <p><Tag>{moment(item.ngayChieuGioChieu).format("DD/MM/YYYY hh:mm")}</Tag> <Link to={`/booking/${item.maLichChieu}`}><Button size='small' type='primary' >Đặt vé</Button></Link></p>
                                        })}
                                        </div>
                                    })}</div>
                                </div>,
                            }
                        })

                        }
                    />
                </Col>
            </Row>
            <Modal width={"800px"} height="500px" title="Xem Trailer" open={isOpenModal} onCancel={CloseModal}>
                <iframe id='contro_iframe' width="100%" height="500px" src="https://www.youtube.com/embed/Yvvya45zwvg" frameborder="0"></iframe>
            </Modal>
        </div>
    )
}

export default DetailMovie

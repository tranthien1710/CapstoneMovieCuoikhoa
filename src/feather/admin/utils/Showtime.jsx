import React, { useEffect, useState } from 'react'
import {
    Button,
    Cascader,
    Col,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Row,
    Select,
    Switch,
    TreeSelect,
} from 'antd';
import { GetINfoSchedule, GetINfoSystemSchedule } from './ServiceShowtime';
import { useFormik } from 'formik';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCreateScheduleAction } from '../redux/action';
import * as Yup from 'yup'
import moment from 'moment/moment';
const Showtime = () => {
    const [State, setState] = useState({
        hethongrap: [],
        cumrap: []
    })
    const dispatch = useDispatch()
    useEffect(() => {
        GetINfoSchedule().then(res => setState({
            ...State, hethongrap: res.data.content
        }))
    }, [])
    const param = useParams()
    const film = JSON.parse(localStorage.getItem("phim"))

    const handleChedule = (value) => {
        console.log("handleChedule", value)
        GetINfoSystemSchedule(value).then(res => setState({
            ...State, cumrap: res.data.content,
        }))
    }
    const formik = useFormik({
        initialValues: {
            maPhim: param.id,
            ngayChieuGioChieu: "",
            maRap: "",
            giaVe: "",
        },
        onSubmit: (value) => {
            dispatch(fetchCreateScheduleAction(value))

        },
        validationSchema: Yup.object({
            ngayChieuGioChieu: Yup.string().required("required"),
            maRap: Yup.string().required("required"),
            giaVe: Yup.string().required("required")
        })
    })
    const handleClubCinema = (value) => {
        formik.setFieldValue("maRap", value)
    }
    const handleDate = (value, dateString) => {
        
        formik.setFieldValue("ngayChieuGioChieu", dateString)
    }
    const handleChangeNumber = (value) => {
        formik.setFieldValue("giaVe", value)
    }
    return (
        <div>
            <Row>
                <Col span={8}>
                    <img width={"100%"} src={film.hinhAnh} />
                </Col >
                <Col span={16}>
                    <Form
                        onSubmitCapture={formik.handleSubmit}
                        labelCol={{
                            span: 4,
                        }}
                        wrapperCol={{
                            span: 14,
                        }}

                    >
                        <Form.Item label="H??? th???ng r???p">
                            <Select onChange={handleChedule} options={State.hethongrap.map((item) => {
                                return { label: item.tenHeThongRap, value: item.maHeThongRap }
                            })} ></Select>

                        </Form.Item>
                        <Form.Item label="C???m r???p">
                            <Select name="maRap" onChange={handleClubCinema} options={State.cumrap.map((item) => {
                                return { label: item.tenCumRap, value: item.maCumRap }
                            })} ></Select>
                            {formik.errors.maRap && formik.touched.maRap && (
                                <p>{formik.errors.maRap}</p>
                            )}
                        </Form.Item>
                        <Form.Item label="Ng??y Chi???u gi??? chi???u">
                            <DatePicker onChange={handleDate} showTime format={"DD/MM/YYYY hh:mm:ss"} />
                            {formik.errors.ngayChieuGioChieu && formik.touched.ngayChieuGioChieu && (
                                <p>{formik.errors.ngayChieuGioChieu}</p>
                            )}
                        </Form.Item>
                        <Form.Item label="Gi?? v??">
                            <InputNumber onChange={handleChangeNumber} />
                            {formik.errors.giaVe && formik.touched.giaVe && (
                                <p>{formik.errors.giaVe}</p>
                            )}
                        </Form.Item>

                        <Form.Item label="T??c v???">
                            <Button htmlType='submit' >Th??m l???ch chi???u</Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default Showtime

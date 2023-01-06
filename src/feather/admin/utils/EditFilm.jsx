import React, { useEffect, useState } from 'react'
import {
    Button,
    Cascader,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Switch,
    TreeSelect,
} from 'antd';
import dayjs from 'dayjs';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEditFLimAction } from '../redux/action';
import { fetchDetailMovieAction } from 'feather/booking/redux/action'
import * as Yup from 'yup'
import { useParams } from 'react-router-dom';
import moment from 'moment';
const EditFilm = () => {
    const param = useParams();


    const [componentSize, setComponentSize] = useState('default');
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };
    const [imgSrc, setimgSrc] = useState("");
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchDetailMovieAction(param.id))
    }, [])
    const detialfilm = useSelector(state => state.booking.DetailMovie)


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            maPhim: param.id,
            tenPhim: detialfilm?.tenPhim,
            trailer: detialfilm?.trailer,
            moTa: detialfilm?.moTa,
            maNhom: detialfilm?.maNhom,
            ngayKhoiChieu: detialfilm?.ngayKhoiChieu,
            sapChieu: detialfilm?.sapChieu,
            dangChieu: detialfilm?.dangChieu,
            hot: detialfilm?.hot,
            danhGia: detialfilm?.danhGia,
            hinhAnh: null,
        },
        onSubmit: (values) => {
            console.log(values)

            let fordata = new FormData();
            for (let key in values) {
               if(key==="ngayKhoiChieu"){
                let data=moment(values[key])._i.format("DD/MM/YYYY hh:mm:ss")
                console.log("data",data)
                fordata.append(key,data)
               }
                if (key !== "hinhAnh") {
                    fordata.append(key, values[key])
                }
                if (values.hinhAnh !== null) {
                    fordata.append('Flie', values.hinhAnh, values.hinhAnh.name)
                }
            }
            console.log(fordata)
            dispatch(fetchEditFLimAction(fordata))

        },
        validationSchema: Yup.object({
            tenPhim: Yup.string().required("require"),
            trailer: Yup.string().required("require"),
            moTa: Yup.string().required("require"),
            ngayKhoiChieu: Yup.string().required("require"),
            danhGia: Yup.string().required("require"),
        })
    })

    const handleChangeDate = (value, dateString) => {

        // console.log('Selected Time: ', dayjs(value));
        // console.log('Formatted Selected Time: ', dateString);
        formik.setFieldValue("ngayKhoiChieu", dateString)
    }
    const onOk = (value) => {
        console.log('onOk: ', value);
        formik.setFieldValue("ngayKhoiChieu", value)
    };
    // console.log("123",moment(formik.values.ngayKhoiChieu)._i.format("DD/MM/YYYY hh:mm:ss"))
    const handleChangeSwitch = (name) => {
        return (value) => {
            formik.setFieldValue(name, value)
        }
    }
    const handleChangeIMG = (e) => {

        let read = new FileReader()
        read.readAsDataURL(e.target.files[0])
        read.onload = (e) => {
            setimgSrc(e.target.result)
        }
        formik.setFieldValue("hinhAnh", e.target.files[0])
    }

    return (
        <div>
            <h3>Edit Phim</h3>
            <div>


                <Form
                    onSubmitCapture={formik.handleSubmit}
                    labelCol={{
                        span: 4,
                    }}
                    wrapperCol={{
                        span: 14,
                    }}
                    layout="horizontal"
                    initialValues={{
                        size: componentSize,
                    }}
                    onValuesChange={onFormLayoutChange}
                    size={componentSize}
                >
                    <Form.Item label="Form Size" name="size">
                        <Radio.Group>
                            <Radio.Button value="small">Small</Radio.Button>
                            <Radio.Button value="default">Default</Radio.Button>
                            <Radio.Button value="large">Large</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="Tên Phim">
                        <Input name='tenPhim' onChange={formik.handleChange} value={formik.values.tenPhim} />
                        {formik.errors.tenPhim && formik.touched.tenPhim && (
                            <p>{formik.errors.tenPhim}</p>
                        )}
                    </Form.Item>
                    <Form.Item label="Trailer">
                        <Input name='trailer' onChange={formik.handleChange} value={formik.values.trailer} />
                        {formik.errors.trailer && formik.touched.trailer && (
                            <p>{formik.errors.trailer}</p>
                        )}
                    </Form.Item>
                    <Form.Item label="Mô tả">
                        <Input name='moTa' onChange={formik.handleChange} value={formik.values.moTa} />
                        {formik.errors.moTa && formik.touched.moTa && (
                            <p>{formik.errors.moTa}</p>
                        )}
                    </Form.Item>
                    <Form.Item label="Ngày khởi chiếu">
                        <DatePicker format={"DD/MM/YYYY hh:mm:ss"} onChange={handleChangeDate} showTime onOk={onOk} value={dayjs(formik.values.ngayKhoiChieu)} />
                        {formik.errors.ngayKhoiChieu && formik.touched.ngayKhoiChieu && (
                            <p>{formik.errors.ngayKhoiChieu}</p>
                        )}
                    </Form.Item>
                    <Form.Item label="Đang Chiếu" valuePropName="checked">
                        <Switch name="dangChieu" onChange={handleChangeSwitch("dangChieu")} checked={formik.values.dangChieu} />
                    </Form.Item>
                    <Form.Item label="Sắp Chiếu" valuePropName="checked">
                        <Switch name="sapChieu" onChange={handleChangeSwitch("sapChieu")} checked={formik.values.sapChieu} />
                    </Form.Item>
                    <Form.Item label="Hót" valuePropName="checked">
                        <Switch name="hot" onChange={handleChangeSwitch("hot")} checked={formik.values.hot} />
                    </Form.Item>
                    <Form.Item label="InputNumber">
                        <InputNumber name='danhGia' onChange={handleChangeSwitch("danhGia")} value={formik.values.danhGia} />
                        {formik.errors.danhGia && formik.touched.danhGia && (
                            <p>{formik.errors.danhGia}</p>
                        )}
                    </Form.Item>
                    <Form.Item label="Hình ảnh">
                        <Input type='file' name='hinhAnh' onChange={handleChangeIMG} />
                        <img width={"100px"} height="150px" alt='' src={imgSrc === "" ? detialfilm?.hinhAnh : imgSrc} />
                    </Form.Item>

                    <Form.Item label="Tác vụ">
                        <Button htmlType='submit' >Cap nhap</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default EditFilm

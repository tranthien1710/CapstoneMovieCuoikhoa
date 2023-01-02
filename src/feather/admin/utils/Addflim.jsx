import React, { useState } from 'react'
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
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { fetctAddFilmActon } from '../redux/action';
import * as Yup from 'yup'
const Addflim = () => {
    const [componentSize, setComponentSize] = useState('default');
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };
    const [imgSrc, setimgSrc] = useState("");
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            tenPhim: "",
            trailer: "",
            moTa: '',
            maNhom: "GP01",
            ngayKhoiChieu: "",
            sapChieu: "",
            dangChieu: "",
            hot: "",
            danhGia: "",
            hinhAnh: {},
        },
        onSubmit: (values) => {
            let fordata = new FormData();
            for (let key in values) {
                if (key !== "hinhAnh") {
                    fordata.append(key, values[key])
                } else {
                    fordata.append('Flie', values.hinhAnh, values.hinhAnh.name)
                }
            }
            dispatch(fetctAddFilmActon(fordata))
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
        formik.setFieldValue("ngayKhoiChieu", dateString)
    }
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
            <h3>Thêm Phim</h3>
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
                        <Input name='tenPhim' onChange={formik.handleChange} />
                        {formik.errors.tenPhim && formik.touched.tenPhim && (
                            <p>{formik.errors.tenPhim}</p>
                        )}
                    </Form.Item>
                    <Form.Item label="Trailer">
                        <Input name='trailer' onChange={formik.handleChange} />
                        {formik.errors.trailer && formik.touched.trailer && (
                            <p>{formik.errors.trailer}</p>
                        )}
                    </Form.Item>
                    <Form.Item label="Mô tả">
                        <Input name='moTa' onChange={formik.handleChange} />
                        {formik.errors.ngayKhoiChieu && formik.touched.ngayKhoiChieu && (
                            <p>{formik.errors.ngayKhoiChieu}</p>
                        )}
                    </Form.Item>
                    <Form.Item label="Ngày khởi chiếu">
                        <DatePicker format={"DD/MM/YYYY"} onChange={handleChangeDate} />
                        {formik.errors.moTa && formik.touched.moTa && (
                            <p>{formik.errors.moTa}</p>
                        )}
                    </Form.Item>
                    <Form.Item label="Đang Chiếu" valuePropName="checked">
                        <Switch name="dangChieu" onChange={handleChangeSwitch("dangChieu")} />
                    </Form.Item>
                    <Form.Item label="Sắp Chiếu" valuePropName="checked">
                        <Switch name="sapChieu" onChange={handleChangeSwitch("sapChieu")} />
                    </Form.Item>
                    <Form.Item label="Hót" valuePropName="checked">
                        <Switch name="hot" onChange={handleChangeSwitch("hot")} />
                    </Form.Item>
                    <Form.Item label="InputNumber">
                        <InputNumber name='danhGia' onChange={handleChangeSwitch("danhGia")} />
                        {formik.errors.danhGia && formik.touched.danhGia && (
                            <p>{formik.errors.danhGia}</p>
                        )}
                    </Form.Item>
                    <Form.Item label="Hình ảnh">
                        <Input type='file' name='hinhAnh' onChange={handleChangeIMG} />
                        <img width={"100px"} height="150px" alt='' src={imgSrc} />
                    </Form.Item>

                    <Form.Item label="Tác vụ">
                        <Button htmlType='submit' >Thêm</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Addflim

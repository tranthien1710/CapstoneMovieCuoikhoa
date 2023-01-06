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
import { GetTypeUser } from './ServiceUser';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { useDispatch } from 'react-redux';
import { fetctAddUserAction } from '../redux/action';
const AddUser = () => {
    const [StateType, setStateType] = useState([])
    useEffect(() => {
        GetTypeUser().then(res => setStateType(res.data.content))
    }, [])
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            taiKhoan: "",
            matKhau: "",
            email: "",
            soDt: "",
            maNhom: "GP01",
            maLoaiNguoiDung: "",
            hoTen: ""
        },
        onSubmit: (value) => {
            console.log(value)
            dispatch(fetctAddUserAction(value))
        },
        validationSchema: Yup.object({
            taiKhoan: Yup.string().required("required"),
            matKhau: Yup.string().required("required"),
            email: Yup.string().required("required").email("email not invalid"),
            soDt: Yup.number("not number").required("required"),
            hoTen: Yup.string().required("required"),
        })
    })
    const handleChangeSelect = (a) => {
        formik.setFieldValue("maLoaiNguoiDung", a)
    }
    return (
        <div>
            <h1>Thêm user</h1>
            <Form
                onSubmitCapture={formik.handleSubmit}
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}

            >
                <Row>

                    <Col span={12}>
                        <Form.Item label="Tài khoản">
                            <Input name='taiKhoan' onChange={formik.handleChange} />
                            {formik.errors.taiKhoan && formik.touched.taiKhoan && (
                                <p>{formik.errors.taiKhoan}</p>
                            )}
                        </Form.Item>
                        <Form.Item label="Mật khẩu">
                            <Input name='matKhau' onChange={formik.handleChange} />
                            {formik.errors.matKhau && formik.touched.matKhau && (
                                <p>{formik.errors.matKhau}</p>
                            )}
                        </Form.Item>
                        <Form.Item label="Họ tên">
                            <Input name='hoTen' onChange={formik.handleChange} />
                            {formik.errors.hoTen && formik.touched.hoTen && (
                                <p>{formik.errors.hoTen}</p>
                            )}
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item label="Email">
                            <Input name='email' onChange={formik.handleChange} />
                            {formik.errors.email && formik.touched.email && (
                                <p>{formik.errors.email}</p>
                            )}
                        </Form.Item>
                        <Form.Item label="Số điện thoại">
                            <Input name='soDt' onChange={formik.handleChange} />
                            {formik.errors.soDt && formik.touched.soDt && (
                                <p>{formik.errors.soDt}</p>
                            )}
                        </Form.Item>

                        <Form.Item label="Loại người dùng">
                            <Select name='maLoaiNguoiDung' onChange={handleChangeSelect} options={StateType.map((item) => {
                                return { label: item.tenLoai, value: item.maLoaiNguoiDung }
                            })} ></Select>
                        </Form.Item>

                        <Form.Item label="Tác vụ">
                            <Button htmlType='submit'>Thêm</Button>
                        </Form.Item>
                    </Col>

                </Row>

            </Form>



        </div>
    )
}

export default AddUser

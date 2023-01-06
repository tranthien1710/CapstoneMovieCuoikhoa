import React, { useEffect } from 'react'
import { Button, Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDeleteUserAction, fetchListInforUserAction } from '../redux/action';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Input, Space } from 'antd';
const { Search } = Input;
const AdminUser = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchListInforUserAction())
  }, [])
  const listUser = useSelector(state => state.admin.ListUser)

  const columns = [
    {
      title: 'STT',
      dataIndex: 'taiKhoan',
      render: (text, listUser, index) => {
        return index
      }
    },
    {
      title: 'Tài khoản',
      dataIndex: 'taiKhoan',
      sorter: (a, b) => a.taiKhoan - b.taiKhoan,
      sortDirections: ['descend'],
    },
    {
      title: 'Mật khẩu',
      dataIndex: 'matKhau',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.matKhau - b.matKhau,
    },
    {
      title: 'Họ tên',
      dataIndex: 'hoTen',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.hoTen - b.hoTen,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.email - b.email,
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'soDT',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.soDT - b.soDT,
    },
    {
      title: 'Action',

      render: (text, listUser) => {
        return <p className='text-2xl cursor-pointer'>
          <span> <Link to={`/admin/edituser/${listUser.taiKhoan}`} ><EditOutlined /></Link> </span>
          <span onClick={() => {
            if (window.confirm("bạn chắc muốn xoá " + listUser.taiKhoan)) {
              dispatch(fetchDeleteUserAction(listUser.taiKhoan))
            }
          }}> <DeleteOutlined /> </span>
        </p>
      }
    },


  ];
  const data = listUser;
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  const onSearch = (value) => {
    dispatch(fetchListInforUserAction(value))
  }
  return (
    <div>
      <Link to={"/admin/adduser"}> <Button className='my-2' type='primary' size='large'>Thêm User</Button></Link>
      <Search placeholder="input search text" onSearch={onSearch} enterButton />
      <Table columns={columns} dataSource={data} />;
    </div>
  )
}

export default AdminUser

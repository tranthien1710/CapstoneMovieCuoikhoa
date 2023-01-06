import React, { useEffect } from 'react'
import { Button, Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDeleteFilmACtion, fetchListFilmAction } from '../redux/action';
import { CalendarOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { Link } from 'react-router-dom';
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);


const AdminFilm = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchListFilmAction())
  }, [])
  const listFilm = useSelector(state => state.admin.ListFlim)
  const columns = [
    {
      title: 'Mã Phim',
      dataIndex: "maPhim",

      sorter: (a, b) => a.maPhim - b.maPhim,
      sortDirections: ['descend'],
    },
    {
      title: 'Tên Phim',
      dataIndex: 'tenPhim',
      defaultSortOrder: 'descend',

    },
    {
      title: 'Hình ảnh',
      dataIndex: 'hinhAnh',
      render: (text, listFilm) => {
        return <img width={100} height={100} src={listFilm.hinhAnh} alt="" />
      }

    },
    {
      title: 'Mô tả',
      dataIndex: 'moTa',
      render: (text, listFilm) => {
        return <span>{listFilm.moTa.slice(0, 100) + "..."}</span>
      }

    },
    {
      title: 'Action',
      render: (text, listFilm) => {
        return <p className='text-xl'><Link to={`/admin/editfilm/${listFilm.maPhim}`} >
          <span className='mx-2 cursor-pointer' ><EditOutlined /></span>
        </Link>
          <span onClick={()=>{
            if(window.confirm("Bạn chắc muốn xoá phim "+listFilm.tenPhim)){
             try {
              dispatch(fetchDeleteFilmACtion(listFilm.maPhim))
              dispatch(fetchListFilmAction)
             } catch (error) {
              console.log(error)
             }
            }
           
          }} className='mx-2 cursor-pointer'><DeleteOutlined /></span>
       <Link to={`/admin/showtime/${listFilm.maPhim}`} > <span onClick={()=>{
        localStorage.setItem("phim",JSON.stringify(listFilm))
       }} ><CalendarOutlined /></span></Link>
        </p>
      }

    },
  ];
  const data = listFilm
  const onChange = (value) => {

  }
  const onSearch = (value) => {
      
      dispatch(fetchListFilmAction(value))
  }
  return (
    <div>
      <Link to='/admin/addfilm'> <Button className='my-2' type='primary' size='large' >Thêm Phim</Button></Link>
      <Search
     
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
      <Table columns={columns} dataSource={data} onChange={onChange} />;
    </div>
  )
}

export default AdminFilm

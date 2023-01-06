
const { default: requestApi } = require("app/CallApi")
const { default: PATH_API } = require("app/PathApi")
const { actionTypeAdmin } = require("./type")
//lay danh sach phim
export const fetchListFilmAction = (tenPhim = "") => {
    let url = "";
    if (tenPhim.trim() === "") {
        url = PATH_API.LINK_lIST_FILM;
    }
    else {
        url = `api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01&tenPhim=${tenPhim}`
    }
    return async (next) => {
        try {
            const res = await requestApi({
                method: "get",
                url: url
            })
            next({
                type: actionTypeAdmin.SHOW_LIST_FILM,
                payload: res.data.content
            })
        } catch (error) {
            console.log(error)
        }
    }
}

//add phim
export const fetctAddFilmActon = (data) => {
    return async (next) => {
        try {
            const res = await requestApi({
                method: 'post',
                url: PATH_API.LINK_ADD_FILM,
                data: data
            })
            alert("Thao tác thành công")
        } catch (error) {
            alert(error.response.message)
        }
    }
}
//edit film 
export const fetchEditFLimAction = (ddata) => {
    return async (next) => {
        try {
            const res = await requestApi({
                url: PATH_API.LINK_EDIT_FILM,
                method: "post",
                data: ddata
            })
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }
}
//xoa phim
export const fetchDeleteFilmACtion = (id) => {
    return async (next) => {
        try {
            const res = await requestApi({
                method: "delete",
                url: PATH_API.LINK_DELETE_FILM,
                params: {
                    MaPhim: id
                }
            })
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }
}

//tao lich chieu
export const fetchCreateScheduleAction = (data) => {
    return async (next) => {
        try {
            const res = await requestApi({
                method: "post",
                url: PATH_API.LINK_CREATE_SHEDULE,
                data: data
            })
            alert("tạo lich chếu thành công")
        } catch (error) {
            console.log(error)
        }
    }
}
//action danh sach nguoi dung
export const fetchListInforUserAction = (tuKhoa = "") => {
    let url = "";
    if (tuKhoa.trim() === "") {
        url = PATH_API.LINK_INFOR_USER
    } else {
        url = `api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01&tuKhoa=${tuKhoa}`
    }

    return async (next) => {
        try {
            const res = await requestApi({
                method: 'GET',
                url: url
            })
            next({
                type: actionTypeAdmin.SHOW_LIST_USER,
                payload: res.data.content
            })
        } catch (error) {
            console.log(error)
        }
    }
}
//them use
export const fetctAddUserAction = (data) => {
    return async (next) => {
        try {
            const res = await requestApi({
                method: 'post',
                url: PATH_API.LINK_ADD_USER,
                data: data
            })
            alert("Thêm thành công")
        } catch (error) {
            console.log(error)
        }
    }
}
//update user
export const fetchUpdateUserAction = (data) => {
    return async (next) => {
        try {
            const res = await requestApi({
                method: 'put',
                url: PATH_API.LINK_UPDATE_USER,
                data: data
            })
            console.log(res.data)
        } catch (error) {
            alert(error.response.data.content)
        }
    }
}
//xoá user 
export const fetchDeleteUserAction = (tk) => {
    return async (next) => {
        try {
            const res = await requestApi({
                method: 'delete',
                url: PATH_API.LINK_DELETE_USER,
                params: {
                    TaiKhoan: tk
                }
            })
            console.log(res.data)
        } catch (error) {
            alert(error.response.data.content)
        }
    }
}
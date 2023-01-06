const { default: requestApi } = require("app/CallApi")

export const GetTypeUser = async () => {
    try {
        const res = await requestApi({
            method: "get",
            url: '/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung'
        })
        return res
    } catch (error) {
        console.log(error)
    }
}
export const GetInfoUser = async (tk) => {
    try {
        const res = await requestApi({
            method: "post",
            url: `/api/QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${tk}`,
        })
        return res
    } catch (error) {
        console.log(error)
    }
}
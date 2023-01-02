const { default: requestApi } = require("app/CallApi")

export const getInfoScheduleCinema = async (mahethong) => {
    try {
        const res = await requestApi({
            method: "get",
            url: `api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${mahethong}&maNhom=GP01`
        })
        return res
    } catch (error) {
        console.log(error)
    }
}
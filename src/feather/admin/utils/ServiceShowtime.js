const { default: requestApi } = require("app/CallApi")

export const GetINfoSchedule = async () => {
    try {
        const res = await requestApi({
            method: 'get',
            url: '/api/QuanLyRap/LayThongTinHeThongRap',
        })
        return res
    } catch (error) {
        console.log(error)
    }
}

export const GetINfoSystemSchedule = async (id) => {
    try {
        const res = await requestApi({
            method: 'get',
            url: `api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${id}`
        })
        return res
    } catch (error) {
        console.log(error)
    }
}
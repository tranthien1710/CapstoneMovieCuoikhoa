import actionType from "./type"

const { default: requestApi } = require("app/CallApi")
const { default: PATH_API } = require("app/PathApi")


export const fetchListBannerAction = async (next) => {
    try {
        const res = await requestApi({
            url: PATH_API.LINK_BANNER,
            method: 'GET',
        })

        next({
            type: actionType.SHOW_BANNER,
            payload: res.data.content
        })
    } catch (error) {
        console.log(error)
    }
}
//lấy dnah sách phim
export const fetchListMovieAction = (page = 1) => {
    return async (next) => {
        try {
            const res = await requestApi({
                url: PATH_API.LINK_LIST_MOVIE_PAGE,
                method: 'GET',
                params: {
                    maNhom: 'GP10',
                    soTrang: page,
                    soPhanTuTrenTrang: 8
                }
            })
            next({
                type: actionType.SHOW_LIST_MOVIE,
                payload: res.data.content
            })
        } catch (error) {
            console.log(error)
        }
    }
}
//chi tiết phiem
export const fetchDetailMovieAction = (id) => {
    return async (next) => {
        try {
            const res = await requestApi({
                url: PATH_API.LINK_DETAIL_MOVIE,
                method: 'GET',
                params: {
                    MaPhim: id
                }
            })
            next({
                type: actionType.SHOW_DETAIL_MOVIE,
                payload: res.data.content
            })
        } catch (error) {
            console.log(error)
        }
    }
}
//thông tin lich cheu phim
export const fetchScheduleMovieAction = (id) => {
    return async (next) => {
        try {
            const res = await requestApi({
                url: PATH_API.LINK_SCHEDULE_MOVIE,
                method: "get",
                params: {
                    MaPhim: id
                }
            })
            next({
                type: actionType.SHOW_SCHEDULE_MOVIE,
                payload: res.data.content
            })
        } catch (error) {
            console.log(error)
        }
    }
}
//lấy dnsah sách phòng vé
export const fetchListTicketAction = (id) => {
    return async (next) => {
        try {
            const res = await requestApi({
                url: PATH_API.LINK_LIST_TICKET,
                method: 'get',
                params: {
                    MaLichChieu: id
                }
            })
            next({
                type: actionType.SHOW_LIST_TICKET,
                payload: res.data.content
            })
        } catch (error) {
            console.log(error)
        }
    }
}

//action dat vé
export const fetchBookedAction = (list) => {
    return async (next) => {
        try {
            const res = await requestApi({
                method: 'post',
                url: PATH_API.LINK_BOOKED,
                data: list
            })

            alert("Đặt vé thành công")
            next({
                type: actionType.SET_BOOKED
            })
        } catch (error) {
            console.log(error)
        }
    }
}
//lay he thong rap
export const fetchScheduleCinemaAction = async (next) => {
    try {
        const res = await requestApi({
            method: 'get',
            url: PATH_API.LINK_SCHEDULE_CINEMA,
        })
        next({
            type: actionType.SET_SCHEDULE_CINEMA,
            payload: res.data.content
        })
    } catch (error) {
        console.log(error)
    }
}
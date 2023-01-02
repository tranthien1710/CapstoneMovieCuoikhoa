
const { default: requestApi } = require("app/CallApi")
const { default: PATH_API } = require("app/PathApi")
const { actionTypeAdmin } = require("./type")
//lay danh sach phim
export const fetchListFilmAction = async (next) => {
    try {
        const res = await requestApi({
            method: "get",
            url: PATH_API.LINK_lIST_FILM
        })
        next({
            type: actionTypeAdmin.SHOW_LIST_FILM,
            payload: res.data.content
        })
    } catch (error) {
        console.log(error)
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
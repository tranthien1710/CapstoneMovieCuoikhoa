const { default: requestApi } = require("app/CallApi")
const { default: PATH_API } = require("app/PathApi")
const { actionTypeLogin } = require("./type")


//ACTION LOGIN
export const fetchLoginACtion = (user) => {
    return async (next) => {
        try {
            const res = await requestApi({
                method: 'post',
                url: PATH_API.LINK_LOGIN,
                data: user
            })
            next({
                type: actionTypeLogin.SET_LOGIN,
                payload: res.data.content
            })
            localStorage.setItem("token", res.data.content.accessToken);
        } catch (error) {
            throw (error)
        }
    }
}
//ACTION THONG TIN TK
export const fetchProfileAction = async (next) => {
    try {
        const res = await requestApi({
            method: 'post',
            url: PATH_API.LINK_PROFILE,

        })
        next({
            type: actionTypeLogin.SET_LOGIN,
            payload: res.data.content
        })
    } catch (error) {
        console.log(error)
    }
}
//action dang kit
export const fetchSignUserAction = (use) => {
    return async (next) => {
        try {
            const res = await requestApi({
                method: 'post',
                url: PATH_API.LINK_SIGN_USER,
                data: use
            })
           alert("Đang kí thành công")
        } catch (error) {
            alert(error.response.data.content)
        }
    }
}
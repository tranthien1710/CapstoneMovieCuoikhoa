import { actionTypeAdmin } from "./type";

const { default: produce } = require("immer")

const initailState = {
    ListFlim: [],
    ListUser:[],
}

const reduce = (state = initailState, { type, payload }) => {
    return produce(state, draft => {
        switch (type) {
            case actionTypeAdmin.SHOW_LIST_FILM:
                draft.ListFlim = payload;
                break;
                case actionTypeAdmin.SHOW_LIST_USER:
                    draft.ListUser = payload;
                    break;
            default:
                break;
        }
    })
}
export default reduce
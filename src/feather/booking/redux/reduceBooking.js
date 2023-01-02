import { produce } from 'immer';
import actionType from './type';

const initailState = {
    Banners: [],
    ListMovie: [],
    ListMovieDefault: [],
    DangChieu: null,
    SapChieu: null,
    DetailMovie: null,
    ScheduleMovie: [],
    ListChair: [],
    listBooking: [],
    flag: false,
    listScheduleCinema:[],
}
const reduce = (state = initailState, { type, payload }) => {
    return produce(state, draft => {
        switch (type) {
            case actionType.SHOW_BANNER:
                draft.Banners = payload;
                break;
            case actionType.SHOW_LIST_MOVIE:
                draft.ListMovie = payload;
                draft.ListMovieDefault = draft.ListMovie;
                break;
            case actionType.SHOW_SHOWING:
                draft.DangChieu = true;
                draft.SapChieu = false;
                var items = draft.ListMovieDefault.items?.filter(ele => ele.dangChieu === true);
                draft.ListMovie = { ...draft.ListMovie, items }
                break;
            case actionType.SHOW_COMMING:
                draft.DangChieu = false;
                draft.SapChieu = true;
                var items = draft.ListMovieDefault.items?.filter(ele => ele.sapChieu === true);
                draft.ListMovie = { ...draft.ListMovie, items }
                break;
            case actionType.SHOW_DETAIL_MOVIE:
                draft.DetailMovie = payload;
                break;
            case actionType.SHOW_SCHEDULE_MOVIE:
                draft.ScheduleMovie = payload;
                break;
            case actionType.SHOW_LIST_TICKET:
                draft.ListChair = payload;
                break;
            case actionType.ADD_CHAIR_SELECTING:
                const index = draft.listBooking.findIndex(ele => ele.maGhe === payload.maGhe)
                if (index != -1) {
                    draft.listBooking.splice(index, 1)
                }
                else {
                    draft.listBooking.push(payload)
                }
                break;
            case actionType.SET_BOOKED:
                draft.listBooking = [];
                draft.flag = !draft.flag
                break;
                case actionType.SET_SCHEDULE_CINEMA:
                draft.listScheduleCinema = payload;
                break;
            default:
                break;
        }
    })
}

export default reduce;
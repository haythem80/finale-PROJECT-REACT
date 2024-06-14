import { DELETE, GET_ITEMS, SET_SEARCH } from "./actiontype";


const init = {
  items: [],
  search:'',
};



export const reducer = (state = init, { type, payload }) => {
    switch (type) {
        case GET_ITEMS:
            return {
                ...state,
                items: payload,
            }
            case DELETE:
                return {
                    ...state,items:state.items.filter(el=>el.id!== payload)
                };
                case SET_SEARCH :
                    return {
                        ...state,search: payload,
                    };
        default:
            return state;
    }
}

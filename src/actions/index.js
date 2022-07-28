import axios from "axios";

export function sendText(text) {
    return async function (dispatch) {
        var json = await axios.get(`https://cwr-facundo-mazzei-challenge.herokuapp.com/iecho/iecho?text=${text}`);
        return dispatch({
            type: "GET_RESULTS",
            payload: json.data
        })
    };

}
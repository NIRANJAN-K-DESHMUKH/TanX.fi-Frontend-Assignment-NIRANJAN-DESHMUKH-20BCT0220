
const initialData = {
    cart: [],
    userLog : [{
        email:"email123@gmail.com",
        password: "123456",
        isLoggedIn:true
    }]
}

const Reducers = (state=initialData, action) => {
    switch(action.type) {
        case "ADD_PROD":
            const {id, data} = action.payload;
            return {
                ...state,
                cart: [
                    ...state.cart,
                    {
                        id: id,
                        data: data
                    }
                ]
            }
        case "DELETE_PROD":
            const newCart = state.cart.filter((element) => element.id !== action.id);
            return {
                ...state,
                cart: newCart
            }
        case "LOGIN":
            const {userid, password, isLoggedIn} = action.payload;
            return {
                ...state,
                userLog: [
                    ...state.userLog,
                    {
                        id: userid,
                        password: password,
                        isLoggedIn: isLoggedIn
                    }
                ]
            }
        case "LOGOUT":
            const {useridf, passwordf, isLoggedInf} = action.payload;
            return {
                ...state,
                userLog: [
                    ...state.userLog,
                    {
                        id: userid,
                        password: password,
                        isLoggedIn: isLoggedIn
                    }
                ]
            }
        default:
            return state;
    }

};

export default Reducers;
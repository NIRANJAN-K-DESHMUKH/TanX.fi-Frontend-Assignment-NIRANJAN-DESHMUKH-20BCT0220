
const addProduct = (inputData) => {
    return {
        type: "ADD_PROD",
        payload: {
            id: new Date().getTime().toString(),
            data: inputData
        }
    }
};

const deleteProduct = (id) => {
    return {
        type: "DELETE_PROD",
        id
    }
};

const logIn = (inputData) => {
    return {
        type: "LOGIN",
        payload: {
            id: inputData.email,
            password: inputData.password,
            isLoggedIn: true
        }
    }
};

const logOut = (inputData) => {
    return {
        type: "LOGIN",
        payload: {
            id: inputData.email,
            password: inputData.password,
            isLoggedIn: false
        }
    }
};



export {addProduct, deleteProduct, logIn, logOut};
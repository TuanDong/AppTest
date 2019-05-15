let initialState = {userName:'',status:"",navigation:""}

export default loginreducer = (state = initialState,action)=>{
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {...state,userName:action.userName,status:true,navigation:action.navigation};
        case 'LOGIN_ERROR':
            return {...state,status:false};
        case 'LOGOUT':
            return initialState;
    }
    return state;
}
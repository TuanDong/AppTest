export const Login = (userName,pass,navigation)=>{
    if (userName != '' && pass !='') {
        return {
            type:'LOGIN_SUCCESS',
            userName,
            navigation
        }
    } else {
        return {
            type:'LOGIN_ERROR',
            navigation
        }
    }
}
export const Logout = {
    type:"LOGOUT"
}
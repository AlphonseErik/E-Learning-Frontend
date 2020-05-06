const { restConnector } = require(".");

class UserService {
    getProfile(userID) {
        return restConnector({
            url: "/api/v1/users/getprofile",
            method: "POST",
            headers: {
                userID
            }
        })
    }

    fetchAllStudent(){
        return restConnector({
            url: `/api/v1/users/getallstudent`,
            method: "GET",
        })
    }
}

export default UserService;
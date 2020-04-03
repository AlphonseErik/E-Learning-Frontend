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
}

export default UserService;
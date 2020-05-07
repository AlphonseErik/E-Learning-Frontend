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

    fetchAllStudent() {
        return restConnector({
            url: '/api/v1/users/getallstudent',
            method: "GET",
        })
    }

    fetchAllTeacher() {
        return restConnector({
            url: '/api/v1/users/getallteacher',
            method: "GET",
        })
    }

    deletedUser(ID) {
        return restConnector({
            url: `/api/v1/users/${ID}`,
            method: "DELETE",
        })
    }
}

export default UserService;
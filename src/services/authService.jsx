const { restConnector } = require(".");


class AuthService {
    async verifyAccesstoken(accesstoken) {
        return restConnector({
            url: "/api/v1/auth/verifytoken",
            method: "POST",
            headers: {
                accesstoken
            }
        })
    }
}

export default AuthService;
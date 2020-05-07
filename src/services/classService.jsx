const { restConnector } = require(".");

class ClassService {
    fetchClassList() {
        return restConnector({
            url: "/api/v1/classrooms/getall",
            method: "GET",
        })
    }
}

export default ClassService;
var config = function () {

    return {

        serverUrl: "http://localhost/testphpmysql/",
        api: "api/",
        templates: "templates/",
        getInfos: "getInfos/getInfos.php"

    }
}();


var DOM = function () {

    return {
        form: document.getElementById("form"),
        main: document.getElementById("main"),

    }
}();






var router = {};
router.home = function () {
    getCustomers();


}
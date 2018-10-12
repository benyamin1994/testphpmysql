function getTemplate(param, where) {
    $.ajax({
        method: "GET",
        url: config.serverUrl + config.templates + param + ".html",
        success: function (response) {
            DOM[where].innerHTML = response;

        },
        error: function (error) {
            console.log(error)
        }
    })
}

// function getCustomers() {
//     $.ajax({
//         method: "GET",
//         url: config.serverUrl + config.api + config.getInfos,
//         success: function (response) {
//             console.log(response);
//             write(response);
//         },
//         error: function (error) {
//             console.log(error)
//         }
//     })
// }
function getCustomers() {
    $.ajax({
        method: "GET",
        url: config.serverUrl + config.api + config.getInfos,
        success: function (response) {
            console.log(response);

        }
    })
}

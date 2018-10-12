var customersList = document.getElementById("customersList")


function write(customers) {
    for (let index = 0; index < customers.length; index++) {
        var currentCustomer = customers[index];
        draw(currentCustomer);

    }
}

function draw(customer) {
    var currentCustomer = document.createElement("option");
    currentCustomer.innerText = customer.first_name + customer.last_name;
    customersList.appendChild(currentCustomer);
}

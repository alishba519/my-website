const btns = document.querySelectorAll("[data-target]");
const close_modals = document.querySelectorAll(".close-modal");
const overlay = document.getElementById("overlay");
//For opening popup
btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        document.querySelector(btn.dataset.target).classList.add("active");
        overlay.classList.add("active");
    });
});
//For Closing popup using "X" sign
close_modals.forEach((btn) => {
    btn.addEventListener("click", () => {const modal = btn.closest(".modal");
        modal.classList.remove("active");
        overlay.classList.remove("active");
    });
});
//After opening popup, if you click outside the popup, it will close.
window.onclick = (event) => {
    if (event.target == overlay) {
        const modals = document.querySelectorAll(".modal");
        modals.forEach((modal) => modal.classList.remove("actve"));
        overlay.classList.remove("active");
    }
};
//contact form validation

function validation() {
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    error_message.style.padding = "10px";
    var text;
    //Asian name can be three-letter names such as Lee or Mae hence limit >=3
    if (name.length < 3) {
        text = "Please Enter valid Name (Minimum 3 characters)";
        error_message.innerHTML = text;
        return false;
    }
    if (subject.length < 10) {
        text = "Please Enter Correct Subject (Minimum 10 characters)";
        error_message.innerHTML = text;
        return false;
    }
    if (isNaN(phone) || phone.length != 10) {
        text = "Please Enter valid Phone Number(10-digit)";
        error_message.innerHTML = text;
        return false;
    }
    if (message.length <= 140) {
        text = "Please enter more than 140 characters";
        error_message.innerHTML = text;
        return false;
    }
    if (message.length >= 500) {
        text = "Please enter less than 500 characters";
        error_message.innerHTML = text;
        return false;
    }
    alert("Form submitted successfully! Thank you for contacting us");
    return true;
}

//search functionality
function filter() {
    var filterValue, input, ProductList, ProductName,h4,i;
    input = document.getElementById("search");
    filterValue = input.value.toUpperCase();
    ProductList = document.getElementById("Product-list");
    ProductName = ProductList.getElementsByClassName("col-4");
    for (i = 0 ; i < ProductName.length ; i++) {
        h4 = ProductName[i].getElementsByTagName("h4")[0];
        //In search if typed string matches with the element name.
        if (h4.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            ProductName[i].style.display = "";
        }
        else {
            ProductName[i].style.display = "none";
        }
    }
}

//sort product by price
function sortlist() {
    var ProductList, ProductName, i, switching, b, c, shouldSwitch;
    ProductList = document.getElementById("product-list");
    ProductName = ProductList.getElementsByClassName("col-4");
    switching = true;//boolean true
    while (switching) {
        switching = false;
        //loop is running throught each product
        for (i = 0 ; i < (ProductName.length - 1); i++) {
            shouldSwitch = false;
            b = ProductName[i].getElementsByTagName("span")[0].innerHTML;
            c = ProductName[i+1].getElementsByTagName("span")[0].innerHTML;
            //condion to check price for each product item
            if (Number(b) > Number(c)) {
                shouldSwitch = true;
                break;
            }
        }
        //each product elements will switch with next product element based on 
        //product price sorting
        if (shouldSwitch) {
            ProductName[i].parentNode.insertBefore(ProductName[i + 1], ProductName[i]);
            switching = true;
        }
    }
}







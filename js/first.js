var productNameIput = document.getElementById('productNameInpyt');
var producturl = document.getElementById('producturlInput');


var alerttttInput = document.getElementById("alertttt");


if (localStorage.getItem('ourbroduct') == null) {
    productlist = [];
} else {
    productlist = JSON.parse(localStorage.getItem('ourbroduct'));
    dispalyproductlist()
}

var productlist;


function objectss() {
    var aaa = "";
    if (productNameIput.value !== "" & producturl.value !== "") {
        document.getElementById('alertttt').innerHTML = "";

        var product = {
            name: productNameIput.value,
            url: producturl.value,
        };
        productlist.push(product)
        console.log(productlist)

        localStorage.setItem('ourbroduct', JSON.stringify(productlist))

        dispalyproductlist()
    } else {
        var aaa =
            `
         <div id="alertttt" class="alert alert-danger ">
             input name and url
          </div>

        `
        document.getElementById('alertttt').innerHTML = aaa;
    }

}

function dispalyproductlist() {
    var cartona = '';
    for (var i = 0; i < productlist.length; i++) {
        cartona +=
            `
        <tr id="${i}">
        <td>${i}</<td>
        <td>${productlist[i].name}</<td>
        <td>${productlist[i].url}</<td>
        <td> <a class='btn btn-warning' href='${productlist[i].url}'>viste</a></<td> 
        <td><button  class='btn btn-danger'onclick = 'deleterow(${i})'>Delete</button></<td>
        </tr>

        `
    }

    document.getElementById('tablethml').innerHTML = cartona;
}


function deleterow(row) {
    productlist = JSON.parse(localStorage.getItem('ourbroduct'));
    productlist.pop(row)
    localStorage.setItem('ourbroduct', JSON.stringify(productlist)); //put the object back
    document.getElementById(row).innerHTML = "";
}




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
        productNameIput.value = ""
        producturl.value = ""
    } else {
        var aaa =
            `
         <div id="alertttt" class="alert alert-danger ">
            <h3 class=" text text-danger">warning</h3><h4 class="text text-dark" >input name and url</h4>

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
        <td id="pro${i}">${productlist[i].name}</<td>
        <td>${productlist[i].url}</<td>
        <td> <a class='btn btn-warning' href='${productlist[i].url}'>viste</a></<td> 
        <td><button  class='btn btn-danger'onclick = 'deleterow(${i})'>Delete</button></<td>
        <td><button  class='btn btn-danger'onclick = 'ciiiiih("${productlist[i].name}")'>update</button></<td>

        </tr>

        `
    }

    document.getElementById('tablethml').innerHTML = cartona;
}


function ciiiiih(name) {
    //var tabl = name
    //fore(var i = 0; i < tabl.length; i++) {
    //document.getElementById("sch").outerHTML
    //}
    //document.getElementById('productNameInpyt').value = name;
    //alert(name & name2)
    //alert(name2)

    productlist = JSON.parse(localStorage.getItem('ourbroduct'));
    productlist.forEach(tabl => {

        if (tabl.name == name | tabl.name === name) {

            tabl.name = document.getElementById('productNameInpyt').value;
            // 
            console.log(tabl)
        }

    });
    localStorage.setItem('ourbroduct', JSON.stringify(productlist)); //put the object back
    dispalyproductlist()

}

function deleterow(row) {
    productlist = JSON.parse(localStorage.getItem('ourbroduct'));
    productlist.pop(row)
    localStorage.setItem('ourbroduct', JSON.stringify(productlist)); //put the object back
    document.getElementById(row).innerHTML = "";
}








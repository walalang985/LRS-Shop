import jquery from "jquery";
import Swal from "sweetalert2";
import * as bs from 'bootstrap'
var $ = jquery
var swal = Swal
var _chunk_size = 3
function url_builder(url, params) {
    $.each(Object.keys(params), (i, v) => { url += `${i == 0 ? "?" : ""}${i > 0 ? "&" : ""}${v}=${params[v]}` })
    return url
}
$(() => {
    _load_items()
})

function populateSelect(selectedValue) {
    const categories = {
        "Personal Care": [
            "Skin Care",
            "Hair Care",
            "Oral Care",
            "Body Wash",
            "Deodorants",
            "Shaving Products",
            "Makeup"
        ],
        "Groceries": [
            "Fruits",
            "Vegetables",
            "Dairy",
            "Meat",
            "Grains",
            "Frozen Food",
            "Canned Goods",
            "Condiments"
        ],
        "Cleaning Supplies": [
            "All-Purpose Cleaners",
            "Dish Soap",
            "Laundry Detergent",
            "Surface Wipes",
            "Glass Cleaner",
            "Bathroom Cleaners",
            "Trash Bags"
        ],
        "Snacks": [
            "Chips",
            "Nuts",
            "Candy",
            "Granola Bars",
            "Popcorn",
            "Cookies",
            "Trail Mixes"
        ],
        "Household Items": [
            "Paper Towels",
            "Toilet Paper",
            "Plastic Wrap",
            "Aluminum Foil",
            "Batteries",
            "Light Bulbs"
        ],
        "Beverages": [
            "Water",
            "Juice",
            "Soda",
            "Coffee",
            "Tea",
            "Energy Drinks",
            "Alcoholic Beverages"
        ]
    };
    let html = '';

    for (const [group, options] of Object.entries(categories)) {
        html += `<optgroup label="${group}">`;
        options.forEach(optionValue => {
            html += `<option value="${optionValue}" ${optionValue === selectedValue ? 'selected' : ''}>${optionValue}</option>`;
        });
        html += `</optgroup>`;
    }

    // Set the inner HTML of the select element
    return html
}
var functionality = [
    () => {
        $(`button[type="item-edit"]`).each((_, v) => {
            $(v).on("click", () => {
                $.getJSON(url_builder("/item/get", { id: $(v).attr("item-id") }), (data) => {

                    swal.fire({
                        title: "Edit Item",customClass:"swal-lg",
                        html: `
                                <div class="row">
                <div class="col">
                    <input id="itemName" class="form-control" placeholder="Item Name" value=${data.item}>
                    </div>
                    <div class="col">
                    <select id="itemCategory" class="form-select">
                    <option>Item Category</option>
                    ${populateSelect(data.category)}
                </select>
                </div>
                </div>
                <br>
                <div class="row">
                <div class="col-6">
                    <input id="itemPrice" class="form-control" placeholder="Price" type="number" step="0.01" value=${data.price}>
                </div>
                <div class="col-6">
                    <input id="itemStock" class="form-control" placeholder="Stock" type="number" value=${data.stock}>
                </div>
            </div>
                                `,preConfirm: () => {
                                    const name = $('#itemName').val();
                                    const category = $('#itemCategory').val();
                                    const price = $('#itemPrice').val();
                                    const stock = $('#itemStock').val();
                        
                                    if (!itemName || !itemCategory || !itemPrice || !itemStock) {
                                        swal.showValidationMessage('Please fill out all fields');
                                    }
                        
                                    return { name, category, price, stock };
                                }
                    }).then((res)=>{
                        console.log(res.value)
                    })
                })
                
            })
        })
    },
    () => {
        $(`button[type="item-delete"]`).each((_, v) => {
            $(v).on("click", () => {
                console.log($(v).attr("item-id"))
            })
        })
    }
]
var csrf = $('meta[name="csrf-token"]').attr('content')
var sliced = (data) => Array.from({ length: Math.ceil(data.length / _chunk_size) }, (_, i) => data.slice(i * _chunk_size, i * _chunk_size + _chunk_size))
var _load_items = () => {
    $("#items").empty()
    $.getJSON("/items", (data) => {
        $.each(data,(i,v)=>{
            $("#items").append(`
                <tr class="justify-content-center align-items-center">
                    <td><img src="${v.image_link}" style="width:50px;height:50px"></td>
                    <td>${v.item}</td>
                    <td><button type="item-view" item-id="${v.id}"></button></td>
                    <td></td>
                    <td></td>
                </tr>
                `)
        })
        $.each(functionality, (_, v) => v())
    })
}

$('#addItemButton').on('click', function () {
    swal.fire({
        title: 'Add New Item',
        customClass: "swal-lg",
        html: `
            <input id="itemName" class="form-control" placeholder="Item Name">
            <br>
             <select id="itemCategory" class="form-select">
             <option selected>Item Category</option>
            <optgroup label="Personal Care">
                <option value="Skin Care">Skin Care</option>
                <option value="Hair Care">Hair Care</option>
                <option value="Oral Care">Oral Care</option>
                <option value="Body Wash">Body Wash</option>
                <option value="Deodorants">Deodorants</option>
                <option value="Shaving Products">Shaving Products</option>
                <option value="Makeup">Makeup</option>
            </optgroup>
            <optgroup label="Groceries">
                <option value="Fruits">Fruits</option>
                <option value="Vegetables">Vegetables</option>
                <option value="Dairy">Dairy</option>
                <option value="Meat">Meat</option>
                <option value="Grains">Grains</option>
                <option value="Frozen Food">Frozen Food</option>
                <option value="Canned Goods">Canned Goods</option>
                <option value="Condiments">Condiments</option>
            </optgroup>
            <optgroup label="Cleaning Supplies">
                <option value="All-Purpose Cleaners">All-Purpose Cleaners</option>
                <option value="Dish Soap">Dish Soap</option>
                <option value="Laundry Detergent">Laundry Detergent</option>
                <option value="Surface Wipes">Surface Wipes</option>
                <option value="Glass Cleaner">Glass Cleaner</option>
                <option value="Bathroom Cleaners">Bathroom Cleaners</option>
                <option value="Trash Bags">Trash Bags</option>
            </optgroup>
            <optgroup label="Snacks">
                <option value="Chips">Chips</option>
                <option value="Nuts">Nuts</option>
                <option value="Candy">Candy</option>
                <option value="Granola Bars">Granola Bars</option>
                <option value="Popcorn">Popcorn</option>
                <option value="Cookies">Cookies</option>
                <option value="Trail Mixes">Trail Mixes</option>
            </optgroup>
            <optgroup label="Household Items">
                <option value="Paper Towels">Paper Towels</option>
                <option value="Toilet Paper">Toilet Paper</option>
                <option value="Plastic Wrap">Plastic Wrap</option>
                <option value="Aluminum Foil">Aluminum Foil</option>
                <option value="Batteries">Batteries</option>
                <option value="Light Bulbs">Light Bulbs</option>
            </optgroup>
            <optgroup label="Beverages">
                <option value="Water">Water</option>
                <option value="Juice">Juice</option>
                <option value="Soda">Soda</option>
                <option value="Coffee">Coffee</option>
                <option value="Tea">Tea</option>
                <option value="Energy Drinks">Energy Drinks</option>
                <option value="Alcoholic Beverages">Alcoholic Beverages</option>
            </optgroup>
        </select>
   
        <br>
            <input id="itemPrice" class="form-control" placeholder="Price" type="number" step="0.01">
      <br>
            <input id="itemStock" class="form-control" placeholder="Stock" type="number">
      <br>
            <input id="imageURL" class="form-control" placeholder = "Product Image URL" type="url">
            `,
        focusConfirm: false,
        preConfirm: () => {
            const itemName = $('#itemName').val();
            const itemCategory = $('#itemCategory').val();
            const itemPrice = $('#itemPrice').val();
            const itemStock = $('#itemStock').val();
            const imageURL = $("#imageURL").val()
            if (!itemName || !itemCategory || !itemPrice || !itemStock || !imageURL) {
                swal.showValidationMessage('Please fill out all fields');
            }

            return { itemName, itemCategory, itemPrice, itemStock, imageURL };
        }
    }).then((result) => {
        if (result.isConfirmed) {
            const { itemName, itemCategory, itemPrice, itemStock, imageURL } = result.value;
            var url = "/add-item"
            var data = {
                name: itemName,
                category: itemCategory,
                price: itemPrice,
                stock: itemStock,
                url : imageURL
            }
            
            // POST the data to the /add-item endpoint
            $.ajax({
                url: url,
                method: "POST",
                contentType: 'application/json',
                data: JSON.stringify(data),
                headers: {
                    'X-CSRF-TOKEN': csrf
                },
                success: (resp) => {
                    var msg = `The item ${resp.item} has been added successfully`
                    swal.fire({
                        title: 'Item Added!!!',
                        text: msg,
                        icon: "success",
                        timer: 4000,
                        timerProgressBar:true
                    })
                },
                error: (xhr, status, error) => {
                    swal.fire({
                        title: "Error!!!",
                        text: 'There was an error adding your item.',
                        icon: "error"
                    })
                }
            })
        }
    }).then((res) => {
        _load_items()

    });
});
$("button[type='item-categ']").each((_,v)=>{
    $(v).on("click",(e)=>{
        console.log($(v).attr("item-category"))
    })
})
/* 

$(()=>{
    _load_items()
})
function _load_functionality(){
    $.each($("button[type='item-edit']"),(i,v)=>{
        var id = $(v).attr("item-id")
        console.log(id)
    })
}

 */
import { functionality as fun } from "./imports";
var _chunk_size = 3
var _post = (url,data,success,error,csrf_token) => {
    fun.$.ajax({
        url:url,
        method:"POST",
        contentType: 'application/json',
        data:JSON.stringify(data),
        headers: {
            'X-CSRF-TOKEN': csrf_token
                },
        success: success,
        error: error
    })
}

export var utility = {
    POST: (url,data,success,error,csrf_token)=>_post(url,data,success,error,(csrf_token)),
    FIRE: (options) => fun.swal.fire(options),
    ADMIN_TABLE_ROWS:(data)=> {
        var html = ""
        $.each( Array.from({ length: Math.ceil(data.length / _chunk_size) }, (_, i) => data.slice(i * _chunk_size, i * _chunk_size + _chunk_size)),(i,v)=>{
            var temp = ""
            fun.$.each(v,(i,v)=>{
                
                temp+=`
            <div class="card col-${12/_chunk_size} text-center">
                <div class="card-body d-flex justify-content-between align-items-center">
                    <div>
                        <h5 class="card-title">${v.item}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${v.category}</h6>
                        <p class="card-text">Price: ₱${v.price}</p>
                        <p class="card-text">Stock: ${v.stock} items available</p>
                    </div>
                    <div>
                    <button class="btn btn-primary" type="item-edit" item-id="${v.id}">Edit</button>
                    <button class="btn btn-danger" item-id="${v.id}">Delete</button>
                    </div>
                </div>
            </div>`
            })
            html+=`
        <div class="row">
            ${temp}
        </div>
        <br>
        `
        })       
        return html
    },
    JSON: fun.$.getJSON
}


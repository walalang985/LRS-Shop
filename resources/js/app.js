import './bootstrap';
import { functionality as fun} from './utility/imports';
var $ = fun.$
var swal = fun.swal
var bs = fun.bs

$("#inventory").on("click",function(e){
    e.preventDefault()
    var text = $(this).text()
    console.log(text)
})
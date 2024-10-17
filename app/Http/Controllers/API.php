<?php

namespace App\Http\Controllers;

use App\Models\inventory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class API extends Controller
{
    //
    public function search(Request $request){
        $keyword = $request->get('q');

    }
    public function add_item(Request $request){
        #if(!Auth::check())abort(404);
        $request->validate(['name'=>'required|string','category'=>'required|string','price'=> 'required|numeric','stock'=>'required|integer','url'=>'required|string']);
        $data = [
            'item'=>$request->name, 'category'=>$request->category,'price'=>$request->price,'stock'=>$request->stock,'image_link'=>$request->url
        ];
        inventory::create($data);
        
        return response()->json($data);
    }
    public function item_list(){
        return response()->json(inventory::all()->toArray());
    }
    public function get_item(Request $request){
        return response()->json(inventory::find($request->get("id")));
    }
}

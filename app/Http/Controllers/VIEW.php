<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Session;

class VIEW extends Controller
{
    //
    public function index(){
        return Auth::check()? redirect('/dashboard') : view('dashboard.admin');
    }
}

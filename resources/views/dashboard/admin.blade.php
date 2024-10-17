@extends('base')
@section('vite')
    @vite(['resources/sass/app.scss', 'resources/js/admin/app.js', 'resources/css/app.css'])
@endsection
@section('content')
<div class="container">
    <div class=" row text-center">
        <button id="addItemButton" class="btn btn-primary">Add Item</button>
    </div>
    <br>
    <table class="table table-striped text-center">
        <thead>
            <tr>
                <th>Image</th>
                <th>Name</th>
                <th></th>
                <th colspan="3">Actions</th>
                <th></th>
            </tr>
        </thead>
        <tbody id="items">

        </tbody>
    </table>
</div>
@endsection

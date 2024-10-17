@extends('base')

@section('styles')
<style>
    body {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .custom-btn {
            padding: 15px 30px; /* Increased padding */
            font-size: 1.2rem; /* Larger font size */
            border-radius: 25px; /* Rounded corners */
            transition: background-color 0.3s, transform 0.2s; /* Smooth transitions */
        }
        .custom-btn:hover {
            transform: scale(1.05); /* Slightly enlarge on hover */
        }
</style>
@endsection
@section('vite')
    @vite(['resources/sass/app.scss','resources/js/app.js'])
@endsection
@section('content')
    <div class="container">
        <div class="row text-center">
            <button class="btn btn-primary custom-btn col-6" id="inventory">Inventory</button>
            <button class="btn btn-secondary custom-btn col-6" id="pos">POS</button>
        </div>
    </div>
@endsection

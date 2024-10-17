

<?php $__env->startSection('styles'); ?>
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
<?php $__env->stopSection(); ?>
<?php $__env->startSection('vite'); ?>
    <?php echo app('Illuminate\Foundation\Vite')(['resources/sass/app.scss','resources/js/app.js']); ?>
<?php $__env->stopSection(); ?>
<?php $__env->startSection('content'); ?>
    <div class="container">
        <div class="row text-center">
            <button class="btn btn-primary custom-btn col-6" id="inventory">Inventory</button>
            <button class="btn btn-secondary custom-btn col-6" id="pos">POS</button>
        </div>
    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('base', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH D:\LRS-Shop\resources\views/index.blade.php ENDPATH**/ ?>
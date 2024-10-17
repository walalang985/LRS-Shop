
<?php $__env->startSection('vite'); ?>
    <?php echo app('Illuminate\Foundation\Vite')(['resources/sass/app.scss', 'resources/js/admin/app.js', 'resources/css/app.css']); ?>
<?php $__env->stopSection(); ?>
<?php $__env->startSection('content'); ?>
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
<?php $__env->stopSection(); ?>

<?php echo $__env->make('base', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH D:\LRS-Shop\resources\views/dashboard/admin.blade.php ENDPATH**/ ?>
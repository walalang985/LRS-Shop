
<?php $__env->startSection('vite'); ?>
    <?php echo app('Illuminate\Foundation\Vite')(['resources/sass/app.scss','resources/js/admin/app.js']); ?>
<?php $__env->stopSection(); ?>
<?php $__env->startSection('content'); ?>
    
<?php $__env->stopSection(); ?>
<?php echo $__env->make('base', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH D:\LRS-POS-Inventory\resources\views/dashboard/admin.blade.php ENDPATH**/ ?>
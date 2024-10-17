<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">
    <title><?php echo $__env->yieldContent('title'); ?></title>
    <?php echo $__env->yieldContent('styles'); ?>
    <?php echo $__env->yieldContent('vite'); ?>
</head>
<body>
    
    <?php echo $__env->yieldContent('content'); ?>
    
    <?php echo $__env->yieldContent('script'); ?>
</body>
</html><?php /**PATH D:\LRS-Shop\resources\views/base.blade.php ENDPATH**/ ?>
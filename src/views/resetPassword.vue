<template>
  <div class="reset">
 <div class="main-layout card-bg-1">
        <div class="container d-flex flex-column">
           <div class="row no-gutters align-items-center justify-content-center min-vh-100">
                <div class="col-12 col-md-6 col-lg-5 col-xl-4">
                   <resetPassword />
                </div>
            </div> 
                   
                 
        </div>
    </div>
    </div>
</template>

<script>
import resetPassword from '@/components/resetPassword.vue'


export default{
 name: resetPassword,
 components: {
 resetPassword
 }

}
</script>

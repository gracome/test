<template>
  <div class="signin">
 <div class="main-layout card-bg-1">
        <div class="container d-flex flex-column">

                    <registration />
        </div>
    </div>
    </div>
</template>

<script>
import registration from '@/components/registrationPage.vue'


export default{
 name: registration,
 components: {
 registration
 }

}
</script>

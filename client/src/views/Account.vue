<template>
  <div class="home">
    <Account name="Hellooooo!!!"/>
  </div>
</template>

<script>
import Account from '@/components/Profile.vue'
const user = JSON.parse(localStorage.user);

console.log(user);


export default {
  // name: 'profile',
  components: {
    Account
  }
}

</script>

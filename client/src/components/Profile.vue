<template>
    <div id="content" class="hello">
        <h1>{{ name }}</h1>
        <h2>{{ content.name }}</h2>
        <h2>{{ content.surname }}</h2>
        <button class="btn btn-danger" v-on:click="logout">Logout</button>
    </div>
</template>

<script>
// import Vue from 'vue'
// import User from '../assets/functions.js'
// const user = JSON.parse(localStorage.user);
// console.log(user.name);
export default {
  name: 'Profile',
  data: function () {
    return {
      content: {}
    }
  },
  created: function () {
    try {
      let users = JSON.parse(localStorage.user)
      this.content = users
    } catch (error) {
      this.$router.push('/login')
    }
  },
  props: {
    name: String
  },
  methods: {
    logout: function () {
      localStorage.removeItem('user')
      this.$router.push('/login')
    }
  }
}

</script>

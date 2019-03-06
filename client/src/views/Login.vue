<template>
  <div class="home">
      <h3 class="text-center text-white pt-5">Login form</h3>
    <div class="container">
        <div id="login-row" class="row justify-content-center align-items-center">
            <div id="login-column" class="col-md-6">
                <div class="login-box col-md-12">
                    <form id="login-form" class="form" action="/" method="post">
                        <h3 class="text-center text-info">Login</h3>
                        <div class="form-group">
                            <label for="email" class="text-info">Email:</label><br>
                            <input type="text" name="email" id="email" class="form-control" v-model="email">
                        </div>
                        <div class="form-group">
                            <label for="password" class="text-info">Password:</label><br>
                            <input type="text" name="password" id="password" class="form-control" v-model="password">
                        </div>
                        <div class="form-group">
                            <input type="submit" name="submit" class="btn btn-info btn-md" value="submit" @click="handleSubmit">
                        </div>
                       <p>{{ email }}</p>
                    </form>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {

  // components: {
  //   Login: 'Login'
  // },
  data: () => ({
    email: '',
    password: ''
  }),
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      console.log(this.email)
      let reqBody = {
        email: this.email,
        password: this.password
      }
      fetch('http://localhost:3000/users/login', {
        method: 'POST',
        body: JSON.stringify(reqBody),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        console.log(response)
        return response.json()
      }).then((data) => {
        console.log(data)
        if (data) {
          localStorage.setItem('user', JSON.stringify(data))
          window.location = '/account'
        } else {
          window.location = '/login'
        }
      })
        .catch((err) => console.error(err))
    }
  }
}
</script>

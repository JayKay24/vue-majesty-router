<template>
  <div id="login">
    <h2>Sign In</h2>
    <input type="email" placeholder="Email address" class="form-control">
    <input type="password" placeholder="Password" class="form-control">
    <button class="btn btn-default">Sign In</button>
  </div>
</template>

<script>
export default {
  created () {
    console.log('login')
  }
}
</script>

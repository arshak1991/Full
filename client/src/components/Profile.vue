<template>
    <div class="hello">
        <h1>{{ name }}</h1>
    </div>
</template>

<script>
export default {
  name: 'Profile',
  props: {
    name: String
  }
}
</script>

<template>
  <div>
    <div class="wrapper">
      <div class="container">
        <ul class="nav nav-tabs">
          <li :class="{ active: $route.path == '/home' || $route.path == '/' }" role="presentation"><router-link to="/">Home</router-link></li>
          <li :class="{ active: $route.path == '/about' }" role="presentation"><router-link to="/about">About me</router-link></li>
          <li :class="{ active: $route.path == '/visited' }" role="presentation"><router-link to="/visited">Places visited</router-link></li>
          <li :class="{ active: $route.path == '/contact' }" role="presentation"><router-link to="/contact">Contact me</router-link></li>
        </ul>
        <h1 class="index1" title="Just a little bit about me">{{ title }}</h1>
        <div class="row">
          <div class="col-md-12">
            <slot><!--This is where the page content will be rendered--></slot>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-md-offset-4">
            <router-link to="/contact" title="Click Me">
              <img class="img img-responsive img-rounded" src="/static/img/email_signature_gavin.png" alt="email signature gavin">
            </router-link>
          </div>
        </div>
        <footer>
        <p>Copyright &copy; 2017 Gavin Williams. All Right Reserved.</p>
        </footer>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: [
      'title',
    ],
  };
</script>

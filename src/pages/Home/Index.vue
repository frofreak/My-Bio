<template>
  <gavin title="">
    <div class="row">
      <div class="col-md-12">
        <h1 class="index1">Welcome to Gavin's Bio.</h1>
      </div>
      <div class="col-md-8 col-md-offset-2">
        <img class="img img-responsive img-rounded" title="This photo was taken in 2010. Venue: Langebaan, Shark Bay" src="/static/img/me.jpg" alt="A picture of me.">
      </div>
    </div>
  </gavin>
</template>

<script>
  /* ============
   * Home Index Page
   * ============
   *
   * The home index page.
   */

  import Gavin from '@/layouts/BioLayout';

  export default {
    /**
     * The name of the page.
     */
    name: 'home-index',

    /**
     * The components that the page can use.
     */
    components: {
      Gavin,
    },
  };
</script>

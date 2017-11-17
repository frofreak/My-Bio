<template>
  <gavin title="About me">
    <table class="table table-condensed table-hover table-bordered purple-background">
      <tbody>
        <tr>
          <td>First name:</td>
          <td>Gavin, Wayne</td>
        </tr>
        <tr>
          <td>Last name:</td>
          <td>Williams</td>
        </tr>
        <tr>
          <td>Email:</td>
          <td><a href="https://closurecode.com/" target="_blank">gavin@closurecode.com</a></td>
        </tr>
        <tr>
          <td>Contact number:</td>
          <td>083 30 69 255</td>
        </tr>
        <tr>
          <td rowspan="3">Sports:</td>
          <td>Rugby</td>
        </tr>
        <tr>
          <td>Cricket</td>
        </tr>
        <tr>
          <td>Tennis</td>
        </tr>
        <tr>
          <td rowspan="3">Hobbies:</td>
          <td>Taking long walks on the beach.</td>
        </tr>
        <tr>
          <td>Gardenning.</td>
        </tr>
        <tr>
          <td>Collecting Retro art, and ornaments. </td>
        </tr>
      </tbody>
    </table>
  </gavin>
</template>

<script>
  import gavin from '@/layouts/BioLayout';

  export default {
    name: 'about.index',

    components: {
      gavin,
    },
  };
</script>

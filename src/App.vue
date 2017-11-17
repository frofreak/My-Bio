<template>
<div id="app">
  <router-view></router-view>
</div>
</template>
<script>
/* ============
 * Entry Point
 * ============
 *
 * The entry point of the application
 */

export default {
  /**
   * The name of the application.
   */
  name: 'vue-boilerplate',

  /**
   * Fires when the app has been mounted.
   */
  // mounted() {
  //   this.registerColourChanger();
  // },
  // data() {
  //   return {
  //     colours: [
  //       'blue',
  //       'black',
  //       'green',
  //       'yellow',
  //       'orange',
  //     ],
  //     colourIndex: 0,
  //     colorChangeInterval: 2000,
  //   },
  // },
  // methods: {
  //   registerColourChanger() {
  //     var that = this;
  //     setInterval(function penis() {
  //       $('.wrapper').css('background-color', that.colours[that.colourIndex]);
  //       that.colourIndex++;
  //
  //       if (that.colourIndex >= that.colours.length) {
  //         that.colourIndex = 0;
  //       }
  //     }, that.colorChangeInterval);
  //   }
  // }
};
</script>

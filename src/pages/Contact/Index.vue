<template>
  <gavin title="Contact me">
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <form>
          <div class="form-group"><br/>
            <input class="form-control" type="text" name="firstname" placeholder="First name">
            <br/>
            <input class="form-control" type="text" name="lastname" placeholder="Last name">
            <br/>
            <input class="form-control" type="email" name="email" placeholder="Email">
            <br/>
            <textarea class="form-control" name="message" rows="10" cols="30" placeholder="Type message here"></textarea>
            <br/><br/>
            <input class="btn btn-success" type="submit" value="Submit">
            <input class="btn btn-danger" type="reset">
          </div>
        </form>
      </div>
    </div>
  </gavin>
</template>
<script>
import gavin from '@/layouts/BioLayout';

export default {
  name: 'contact.index',

  components: {
    gavin,
  },
};
</script>

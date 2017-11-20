<template lang="html">
  <gavin title="Visited">
    <div class="row">
      <div class="col-md-4">
        <div class="thumbnail">
          <img class="img img-rounded" src="/static/img/me.jpg" alt="A picture of me.">
          <div class="caption">
            <h3>Flairing at Sharkbay, Langebaan 2009 </h3>
            <p>
              Praxistraining - Texten lernen für Presse, Web und Werbung
              Schreibdidaktik · Leserorientierung · Rohtexte Schreiben
            </p>
          </div>
        </div>
      </div>
    <div class="col-md-4">
      <div class="thumbnail">
        <img  class="duck img img-rounded" src="/static/img/duckie.jpg" alt="My pet Huck.">
        <div class="caption">
          <h3>My pet Huck</h3>
          <p>Huck is a crossbreed between a hamster and a camel.</p>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="thumbnail">
        <img class="forest img img-rounded" src="/static/img/Forest3.jpg" alt="Forest.">
        <div class="caption">
          <h3>Huck's first art project</h3>
          <p>Huck is a very creative goldfish</p>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-4">
      <div class="thumbnail">
        <img class="shark img img-rounded" src="/static/img/shark.png" atl="Shark">
        <div class="caption">
        <h3>Dont be fooled</h3>
        <p>When Huck feels down, he changes into his shark
          costume, and goes for a swim. "I can't swim,
          but when I do, I drown" - Huck Fi(l/f)thleg.
        </p>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="thumbnail">
        <img class="zombie img img-rounded" src="/static/img/zombie.jpg" atl="Zombie">
        <div class="caption">
        <h3>Selfie</h3>
        <p>A Selfie of Huck</p>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="thumbnail">
        <img  class="rey img img-rounded" src="/static/img/rey.jpg" atl="rey mysterio">
          <div class="caption">
            <h3>Rey 'Huck' Mysterio</h3>
            <p>Always wondered how Huck pays rent.
               Turns out he's been posing as Rey Mysterio
               in his spare time.
             </p>
           </div>
         </div>
       </div>
     </div>
  </gavin>
</template>

<script>
import Gavin from '@/layouts/BioLayout';

export default {
  name: 'visited.index',

  components: {
    Gavin,
  },
};
</script>

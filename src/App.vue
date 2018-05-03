<template>
  <div id="app">
    <div class="arrow arrow-1" v-show="actionsOnProcess">Dispatch Action</div>
    <div class="arrow arrow-2" v-show="mutatiosOnProcess">Committing...</div>
    <div class="arrow arrow-3" v-show="stateChanged">Changing state...</div>
    <div class="arrow arrow-4" v-show="stateInComponentChanged">Rendering...</div>

    <div :class="{ animateFlicker: stateInComponentChanged}" class="circle" id="component">
      <div>Component</div>
      <div>{{componentValue}}</div>
      <div class="btn" @click="dispatchAction()">Add Random Char</div>
    </div>
    
    <div :class="{ animateFlicker: actionsOnProcess}" class="circle" id="actions">
      <div>Actions</div>
    </div>

    <div :class="{ animateFlicker: mutatiosOnProcess}" class="circle" id="mutations">
      <div>Mutations</div>
    </div>
    
    <div :class="{ animateFlicker: stateChanged}" class="circle" id="state">    
      <div>State</div>
      <div>{{stateValue}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    //
  },

  data() {
    return {
      msg: 'Vuex Examples'
    }
  },
  methods: {
    dispatchAction () {
      this.$store.dispatch('showTheMagic')
    }
  },
  computed: {
    componentValue () {
      return this.$store.getters.textLength
    },
    stateValue () {
      return this.$store.getters.textValue
    },
    actionsOnProcess () {
      return this.$store.state.actionsOnProcess
    },
    mutatiosOnProcess () {
      return this.$store.state.mutatiosOnProcess
    },
    stateChanged () {
      return this.$store.state.stateChanged
    },
    stateInComponentChanged () {
      return this.$store.state.stateInComponentChanged
    }
  }
}
</script>

<style>
.btn {
  -webkit-box-shadow: 0px 0px 9px 2px ;  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow:    0px 0px 9px 2px ;  /* Firefox 3.5 - 3.6 */
  box-shadow: 0px 0px 9px 2px #417459;
  width: 250px;
  margin-left: 70px;
  margin-top: 110px;
  border-radius: 10px;
  cursor: pointer;
}
.arrow {
  position: absolute;
  width: 220px;
  font-size: 40px;
  text-align: center;
  color: #afc9f5;
  font-weight: 700;
}
.arrow-1 {
  top: 100px;
  left: 20%;
}
.arrow-2 {
  top: 100px;
  right: 20%;
}
.arrow-3 {
  bottom: 100px;
  right: 20%;
}
.arrow-4 {
  bottom: 100px;
  left: 20%;
}
.circle {
  height: 390px;
  width: 390px;
  border-radius: 50%;
  padding: 10px;
  display: inline-block;
  text-align: center;
  font-size: 40px;
}
#component {
  background: #3ab882;
  position: absolute;
  top: calc(50% - 200px);
  left: 2%;
}
#actions {
  background: #fcb738;
  position: absolute;
  top: 2%;
  left: calc(50% - 200px);
}
#mutations {
  background: #db5961;
  position: absolute;
  top: calc(50% - 200px);
  right: 2%;
}

#state{
  background: #8e7bb9;
  position: absolute;
  bottom: 2%;
  left: calc(50% - 200px);
}



@keyframes flickerAnimation {
  0%   { opacity:1; }
  50%  { opacity:0; }
  100% { opacity:1; }
}
@-o-keyframes flickerAnimation{
  0%   { opacity:1; }
  50%  { opacity:0; }
  100% { opacity:1; }
}
@-moz-keyframes flickerAnimation{
  0%   { opacity:1; }
  50%  { opacity:0; }
  100% { opacity:1; }
}
@-webkit-keyframes flickerAnimation{
  0%   { opacity:1; }
  50%  { opacity:0; }
  100% { opacity:1; }
}
.animateFlicker {
   -webkit-animation: flickerAnimation .5s infinite;
   -moz-animation: flickerAnimation .5s infinite;
   -o-animation: flickerAnimation .5s infinite;
    animation: flickerAnimation .5s infinite;
}

</style>

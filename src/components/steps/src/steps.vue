<template>
  <div class="art-steps" :class="'art-steps_'+direction">
    <div class="art-step" :class="{'art-step_active': step.active, 'art-step_finish': step.finish}" v-for="(step, index) in data" :style="style">
      <div class="art-step-line"></div>
      <div class="art-step-icon" v-if="step.finish"></div>
      <div class="art-step-icon" v-else>{{index+1}}</div>
      <div class="art-step-content">
        <p class="art-step-title"><b>{{step.title}}</b></p>
        <p class="art-step-desc" v-if="step.desc">{{step.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'artSteps',
    props: {
      data: {
        type: Array,
        default: () => { return [];}
      },
      direction: {
        type: String,
        default: 'horizontal'
      }
    },
    methods: {
    },
    computed: {
      style () {
        let total = this.data.length;
        return this.direction == 'horizontal' ? {
          width: `${1/total*100}%`,
          height: `100%`
        } : {
          width: `100%`,
          height: `${1/total*100}%`
        }
      },
    },
  }
</script>
<style type="text/scss" lang="scss">
  @import '../../../styles/components/_steps.scss';
</style>

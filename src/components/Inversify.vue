<template>
  <div class="hello">
    <h1>{{count}}-{{double}}</h1>
    <h3>{{ msg }}</h3>
    <h2>{{text}}</h2>
    <button @click="startFight">startFight</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { IOC_TYPES } from '../types'
import 'reflect-metadata'
import { bootContainer, buildProviderModule, lazyInject } from '../inversify.config'
import { Ninja } from '../entities'

class People extends Ninja {}

@Component({
  props: {
    text: String
  }
})
export default class Inversify extends Vue {
@lazyInject(IOC_TYPES.Ninja)
people: People;

@Prop() private msg!: string;
private count=0;
private double=0;

created (): void {
  bootContainer.load(buildProviderModule())
}

private startFight (): void {
  console.log(this.people.fight())
  console.log(this.people.sneak())
  this.count++
}

@Watch('count')
doubleCount (): void {
  this.double = this.count * 2
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>

<template>
  <div class="hello">
    <h3>{{ msg }}</h3>
    <h2>{{text}}</h2>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import 'reflect-metadata'

@Reflect.metadata('classKey', 'demo class meta data')
class Demo {
  @Reflect.metadata('demoMethodPropertyKey', 'demo method property value')
  demoMethod (): void {
    console.log('do demo method...')
  }
}
// 取定义在类上的方法
console.log(Reflect.getOwnMetadata('classKey', Demo))
console.log(Reflect.getMetadata('classKey', Demo))

// 取定义在属性上的元数据
const demo = new Demo()
console.log(Reflect.getOwnMetadata('demoMethodPropertyKey', demo, 'demoMethod'))
console.log(Reflect.getMetadata('demoMethodPropertyKey', demo, 'demoMethod'))

Reflect.defineMetadata('demoMethodPropertyKey2', 'demoMethodPropertyKey2 value', demo, 'demoMethod')
console.log(Reflect.getMetadata('demoMethodPropertyKey2', demo, 'demoMethod'))

console.log(Demo, Demo.prototype.constructor)

@Component({
  props: {
    text: String
  }
})
export default class ReflectMetadata extends Vue {
  @Prop() private msg!: string;
  private count=0;
  private double=0;
}
</script>

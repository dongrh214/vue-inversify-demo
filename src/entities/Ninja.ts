// 忍者
import { ThrowableWeapon, Warrior, Weapon } from '@/interfaces/'
import { provide, lazyInject } from '../inversify.config'
import { IOC_TYPES } from '../types'
@provide(IOC_TYPES.Ninja)
export class Ninja implements Warrior {
  @lazyInject(IOC_TYPES.Katana)
  private katana: Weapon

  @lazyInject(IOC_TYPES.Shuriken)
  private shuriken: ThrowableWeapon

  public fight (): string {
    return this.katana.hit()
  }

  public sneak (): string {
    return this.shuriken.throw()
  }
}

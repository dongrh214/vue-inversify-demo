// 手里剑
import { ThrowableWeapon } from '@/interfaces'
import { provide, lazyInject } from '../inversify.config'
import { IOC_TYPES } from '../types'
import { Katana } from './Katana'

@provide(IOC_TYPES.Shuriken)
export class Shuriken implements ThrowableWeapon {
  @lazyInject(IOC_TYPES.Katana)
  katana: Katana

  public throw (): string {
    return 'shuriken throw...'
  }
}

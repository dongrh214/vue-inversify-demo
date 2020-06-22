import { Weapon } from '@/interfaces'
import { provide } from '../inversify.config'
import { IOC_TYPES } from '../types'
// 武士刀
@provide(IOC_TYPES.Katana)
export class Katana implements Weapon {
  public hit (): string {
    return 'katan hit...'
  }
}

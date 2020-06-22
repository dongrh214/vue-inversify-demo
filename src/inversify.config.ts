import { Container } from 'inversify'

import getDecorators from 'inversify-inject-decorators'
import { provide, buildProviderModule } from 'inversify-binding-decorators'

const bootContainer = new Container()

const { lazyInject } = getDecorators(bootContainer, false)

export { provide, lazyInject, bootContainer, buildProviderModule }

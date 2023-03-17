import type { App } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

function registerIcons(app: App) {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}
//当插件用
export default registerIcons

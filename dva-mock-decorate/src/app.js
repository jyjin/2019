
import { ConfigProvider } from 'fntd';
const iconUrl = '//at.alicdn.com/t/font_1401343_2x036aqh0sc.js'

export function patchRoutes(routes) {
}

export function render(oldRender) {
  setTimeout(oldRender, 0)
}

export function onRouteChange({ location, routes, action }) {

}

export function rootContainer(container) {
  return <ConfigProvider locale={'ar_EG'} iconFontUrl={iconUrl}>
    {container}
  </ConfigProvider>
}

export function modifyRouteProps(props, { route }) {
  return { ...props };
}


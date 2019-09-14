import makeClassGetter from './__mcg'
const renameMaps = {  }
import { render, h } from 'preact'
import { makeIo, init } from './__competent-lib'
import Socialbuttons from '../../node_modules/splendid/build/components/socialbuttons.jsx'

const __components = {
  'socialbuttons': Socialbuttons,
}

const io = makeIo()

/** @type {!Array<!preact.PreactProps>} */
const meta = [{
  key: 'socialbuttons',
  id: 'c9848',
  props: {
    url: 'https://splendid.page/index.html',
    subject: 'Main Page',
  },
}]
meta.forEach(({ key, id, props = {}, children = [] }) => {
  const { parent, el } = init(id, key)
  const Comp = __components[key]
  props.splendid = { export() {}, addCSS(stylesheet) {
    return makeClassGetter(renameMaps[stylesheet])
  }, addFile() {} }
  el.render = () => {
    render(h(Comp, props, children), parent, el)
  }
  el.render.meta = { key, id }
  io.observe(el)
})

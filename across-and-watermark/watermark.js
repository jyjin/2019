


/**
 * ！！！！！！！！！ 去除水印组件style里的background颜色 建109行
 * @param {} text
 * @param {*} rotate
 * @param {*} color
 * @param {*} fontSize
 * @param {*} fontFamily
 */
const autoWaterMark = function (config) {
  const text = config.text || ''
  const rotate = config.rotate || '45'
  const color = config.color || 'rgba(184, 184, 184, 0.4)'
  const fontSize = config.fontSize || 18
  const fontFamily = config.fontFamily || 'Microsoft Yahei'
  const refContainer = config.refContainer
  const refCIndex = config.refCIndex
  const top = config.top || 30
  const left = config.left || 30
  const props = config.props
  const allowRefresh = config.allowRefresh

  const canvas = document.createElement('canvas')
  drawWaterPrint(rotate)

  function getCtx() {
    canvas.setAttribute('style', 'background:blue')
    const ctx = canvas.getContext('2d');
    return ctx
  }

  // 测量字体宽度
  function getTextProperty(text, font, color) {

    const c0 = getCtx()
    c0.font = font
    c0.fillStyle = color
    const height = c0.measureText('M').width + 0.08 * parseInt(font);
    const width = c0.measureText(text).width
    return {
      width,
      height
    }
  }

  function drawWaterPrint(rotate) {

    rotate = 0 - (Math.abs(rotate % 360))
    const deg = Math.PI / 180
    const font = fontSize + 'px ' + fontFamily
    let {
      width,
      height
    } = getTextProperty(text, font, color)
    width = width + top * 2
    height = height + top * 2


    const el = canvas
    const c1 = el.getContext('2d')

    if (0 >= rotate && rotate > -90) {
      el.setAttribute('width', width * Math.cos(Math.abs(rotate) * deg) + height * Math.sin(Math.abs(rotate) * deg))
      el.setAttribute('height', width * Math.sin(Math.abs(rotate) * deg) + height * Math.cos(Math.abs(rotate) * deg))
      c1.translate(0, width * Math.sin(Math.abs(rotate) * deg) + height * Math.cos(Math.abs(rotate) * deg) - height *
        Math
          .cos(Math.abs(rotate) * deg))
    } else if (-90 >= rotate && rotate > -180) {
      el.setAttribute('width', width * Math.cos(Math.abs(180 + rotate) * deg) + height * Math.sin(Math.abs(180 +
        rotate) * deg))

      el.setAttribute('height', width * Math.sin(Math.abs(180 + rotate) * deg) + height * Math.cos(Math.abs(180 +
        rotate) * deg))
      c1.translate(width * Math.cos(Math.abs(180 + rotate) * deg), width * Math.sin(Math.abs(180 + rotate) * deg) +
        height *
        Math
          .cos(Math.abs(180 + rotate) * deg))
    } else if (-180 >= rotate && rotate > -270) {
      el.setAttribute('width', width * Math.cos(Math.abs(rotate + 180) * deg) + height * Math.sin(Math.abs(
        rotate + 180) * deg))

      el.setAttribute('height', width * Math.sin(Math.abs(rotate + 180) * deg) + height * Math.cos(Math.abs(
        rotate + 180) * deg))
      c1.translate(width * Math.cos(Math.abs(rotate + 180) * deg) + height * Math.sin(Math.abs(
        rotate + 180) * deg),
        height *
        Math
          .cos(Math.abs(rotate + 180) * deg))
    } else {
      el.setAttribute('width', height * Math.sin(Math.abs(rotate + 360) * deg) + width * Math.cos(Math.abs(rotate +
        360) * deg))
      el.setAttribute('height', height * Math.cos(Math.abs(rotate + 360) * deg) + width * Math.sin(Math.abs(rotate +
        360) * deg))
      c1.translate(height * Math.sin(Math.abs(rotate + 360) * deg), 0)
    }
    c1.rotate(rotate * deg)


    c1.font = font
    c1.fillStyle = color
    c1.fillText(text, 0, height * 0.82);

    const base64Url = canvas.toDataURL('image/png');
    // const styleStr = `background:url(${base64Url}) repeat;background-color: #ffffff;`
    //  去除背景色即可
    const styleStr = `background:url(${base64Url}) repeat;`
    
    const id = refContainer.getAttribute('id')
    document.getElementById(id).setAttribute('style', styleStr)

    const MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
    if (MutationObserver) {
      var mo = new MutationObserver((() => {
        const __wm = refContainer
        // 只在__wm元素变动才重新调用 __canvasWM
        if (document.getElementById(id) && document.getElementById(id).getAttribute('style') !== styleStr && !allowRefresh) {
          // 避免一直触发
          mo.disconnect();
          mo = null;
          autoWaterMark(config)
        }
      }));

      mo.observe(refContainer, {
        attributes: true,
        subtree: true,
        childList: true,
      });
    }
  }

}



import install from '@xdn/prefetch/window/install'

async function lateLoadContent() {
  console.log('Late loading content...')
  const url = '/content' + window.location.pathname
  const res = await fetch(url)
  const html = await res.text()
  const root = document.createElement('html')
  root.innerHTML = html
  const elements = Array.from(document.querySelectorAll('[data-moov-replace]'))
  const personalizedElements = Array.from(root.querySelectorAll('[data-moov-replace]'))

  for (let i = 0; i < personalizedElements.length; i++) {
    const el = personalizedElements[i]
    for (let { name, value } of Array.from(el.attributes)) {
      console.log('attr', name, value)
      elements[i].setAttribute(name, value)
    }
    elements[i].innerHTML = el.innerHTML
    console.log('inner html', el.innerHTML)
  }
}

document.addEventListener('DOMContentLoaded', function () {
  install()

  if (window.location.pathname.indexOf('/content') !== 0) {
    lateLoadContent()
  }
})

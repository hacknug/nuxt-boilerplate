export default ({ app }, inject) => {
  const userAgent = process.client && window.navigator.userAgent
  const isSafariMobile = userAgent && (
    // NOTE: iPadOS enables [Settings.app → Safari → Request Desktop Website → All Websites] by default,
    //       preventing the `userAgent` from matching (it is okay, if client complains blame it on Apple).
    (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) &&
    !(userAgent.match(/CriOS/i) || userAgent.match(/FxiOS/i))
  )

  if (isSafariMobile) {
    const meta = app.head.meta
    const isViewport = (i) => i.name === 'viewport'

    meta[meta.findIndex(isViewport)] = {
      ...meta.find(isViewport),
      content: `${meta.find(isViewport).content}, maximum-scale=1`,
    }
  }

  inject('isSafariMobile', !!isSafariMobile)
}

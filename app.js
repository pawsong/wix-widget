var i = 0

setInterval(function () {
  i += 1

  if (i > 2) {
    i = -2
  }

  var height = 1000 + 100 * i
  console.log('height: ' + height)

  Wix.setHeight(height)
}, 1000)

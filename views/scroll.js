function scrollDown(el) {
  el.animate(
    {
      scrollTop: el[0].scrollHeight
    },
    50000,
    function() {}
  ),
    el.animate(
      {
        scrollTop: 0
      },
      50000,
      function() {}
    )
}

$(document).ready(function() {
  window.setTimeout(function() {
    scrollDown($("html,body"))
  }, 6000)
})

// $(document).ready(function() {
//   window.scrollDown($("html,body"))
// })

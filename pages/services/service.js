

var fromRightToLeft_s = document.querySelectorAll('.fromRightToLeft')


fromRightToLeft_s.forEach(item=>{
    new ActivateInView(item)
})

var fromDownToTop_s = document.querySelectorAll('.fromDownToTop')

fromDownToTop_s.forEach(item=>{
    new ActivateInView(item)
})


var line_container = document.querySelector('.line_container');

new ActivateInView(line_container)


var line_items = document.querySelectorAll('.line_item')

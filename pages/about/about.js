var fromRightToLeft_s = document.querySelectorAll('.fromRightToLeft')

console.log(fromRightToLeft_s);

fromRightToLeft_s.forEach(item=>{
    new ActivateInView(item)
})

var fromDownToTop_s = document.querySelectorAll('.fromDownToTop')

fromDownToTop_s.forEach(item=>{
    new ActivateInView(item)
})
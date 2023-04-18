

class CustomActivateInView extends ActivateInView {
    onInView(element) {
        // Implement your custom behavior here.
        gotoIndex(0)
    }
}

var gallery = document.querySelector('.gallery')
new CustomActivateInView(gallery)



  class GalleryWidth {
    constructor() {
      this.gallery = document.querySelector('.gallery')
      this.width = this.gallery.getBoundingClientRect().width;
      window.addEventListener('resize', this.updateWidth.bind(this));
    }
  
    updateWidth() {
      this.width = this.gallery.getBoundingClientRect().width
    }
  }
  
  var frame = document.querySelector('.gallery .frame')
  var imgs = document.querySelectorAll('.gallery .frame .slider img')
  
  var frameWidth = new GalleryWidth()

  window.addEventListener('resize', resizeGalleryFrame)
  
  function resizeGalleryFrame(){
    frame.style.width = `${frameWidth.width}px`
    frame.style.height = `${frameWidth.width / (8/5)}px`
    imgs.forEach(img =>{
    
      img.style.width = `${frameWidth.width}px`
      img.style.height = `${frameWidth.width / (8/5)}px`
    
    })
  }
  resizeGalleryFrame()
  
  
  var left_btn = document.querySelector('.controlls .left_btn')
  var right_btn = document.querySelector('.controlls .right_btn')
  
  right_btn.addEventListener('click', nextIndex)
  left_btn.addEventListener('click', previousIndex)
  
  
  var indexar = document.querySelector('.gallery .controlls .indexes')
  
  imgs.forEach(img =>{
  
    var div = document.createElement('div')
    div.classList.add('item');
    indexar.append(div)
  
  })
  
  var items = document.querySelectorAll('.gallery .controlls .indexes .item')
  var slider = document.querySelector('.gallery .frame .slider')
  
  items.forEach((item, i)=>{
    item.addEventListener('click', ()=>{
      gotoIndex(i)
    })
  })
        
  var current_galley_index = 0
  var max_index = imgs.length - 1
  
  
  function nextIndex(){
    gotoIndex(++current_galley_index)
  }
  function previousIndex(){
    gotoIndex(--current_galley_index)
  }
  
  
  function gotoIndex(index){
    
    if(index > max_index){
      gotoIndex(0)
    } else if(index < 0){
      gotoIndex(max_index)
    } else {
      items.forEach(item=>{
        item.classList.remove('this')
      })
    
      items[index].classList.add('this')
      slider.style.left = `-${frameWidth.width * index}px`
  
      current_galley_index = index
  
      stopTimer()
      startTimer()
    }
  
  }
  

  
  var timer;
  
  function startTimer(){
    timer = setInterval(()=>{
      nextIndex()
    }, 3000)
  }
  function stopTimer(){
    clearInterval(timer)
  }

  
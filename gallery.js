

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
      this.gallery = document.querySelector('.gallery');
      this.width = this.gallery.getBoundingClientRect().width;
      window.addEventListener('resize', () => {
        this.width = this.gallery.getBoundingClientRect().width;
      });
    }
  
    getGalleryWidth() {
      return this.width;
    }
  }
  
  var frame = document.querySelector('.gallery .frame')
  var imgs = document.querySelectorAll('.gallery .frame .slider img')
  
  var frameWidth = new GalleryWidth().getGalleryWidth()
  
  function resizeGalleryFrame(){
    frameWidth = new GalleryWidth().getGalleryWidth()
    frame.style.width = `${frameWidth}px`
    frame.style.height = `${frameWidth / (8/5)}px`
    imgs.forEach(img =>{
    
      img.style.width = `${frameWidth}px`
      img.style.height = `${frameWidth / (8/5)}px`
    
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
      current_galley_index = 0
      gotoIndex(current_galley_index)
    } else if(index < 0){
      current_galley_index = max_index
      gotoIndex(current_galley_index)
    } else {
      items.forEach(item=>{
        item.classList.remove('this')
      })
      console.log('index === ', index);
    
      items[index].classList.add('this')
      slider.style.left = `-${frameWidth * index}px`
  
      current_galley_index = index
  
      stopTimer()
      startTimer()
    }
  
  }
  

  
  var timer
  
  function startTimer(){
    timer = setInterval(()=>{
      nextIndex()
    }, 3000)
  }
  function stopTimer(){
    clearInterval(timer)
  }

  
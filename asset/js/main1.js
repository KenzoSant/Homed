/*============== MUDANCA DO BACKGROUND HEADER  ==============*/
/*function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 50) header.classList.add('scroll-header');
}
window.addEventListener('scroll', scrollHeader)
*/

window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("scroll-header", window.scrollY > 0);
  })
  
  /*============== VALUE ACCORDION  ==============*/
  const accordionItems = document.querySelectorAll('.value__accordion-item')
  
  accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector('.value__accordion-header')
  
    accordionHeader.addEventListener('click', () =>{
        const openItem = document.querySelector('.accordion-open')
  
        toggleItem(item)
  
        /*Isso é oque faz um desaparecer assim que outro aparece*/ 
        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
  })
  
  const toggleItem = (item) =>{
    const accordionContent = item.querySelector('.value__accordion-content')
  
    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }
  }
  
  /*============== SCROLL SECTIONS ACTIVE LINK  ==============*/
  const sections = document.querySelectorAll('section[id]')
    
  const scrollActive = () =>{
    const scrollY = window.pageYOffset
  
  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
  
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      sectionsClass.classList.add('active-link')
    }else{
      sectionsClass.classList.remove('active-link')
    }                                                    
  })
  }
  window.addEventListener('scroll', scrollActive)
  
  /*=============== SHOW SCROLL UP ===============*/ 
  const scrollUp = () =>{
  const scrollUp = document.getElementById('scroll-up')
    // Quando a rolagem for maior que 350 de altura da janela de visualização, adicione a classe show-scroll à tag a com a classe scrollup
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
            : scrollUp.classList.remove('show-scroll')
  }
  window.addEventListener('scroll', scrollUp)

let totalPRice = document.getElementById('total-price')
function UpdateTotalPrice(){
let Prices = document.getElementsByClassName('price')
let sum =0;
    for(let i=0;i< Prices.length;i++){
       sum += Number(Prices[i].innerHTML)
    }
   totalPRice.innerHTML = sum
}



const PlusButton = document.getElementsByClassName('qtyplus plus')
//console.log(PlusButton)

for (let i=0;i<PlusButton.length;i++){
    PlusButton[i].addEventListener('click',function(event){

        let qte = event.target.previousElementSibling
         qte.value= Number(qte.value) +1
                 
         let Prix_Unitaire = event.target.parentElement.parentElement.nextElementSibling.firstElementChild

         let PixTotalPArArticle = event.target.parentElement.parentElement.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling
         
         PixTotalPArArticle.innerHTML = Number(Prix_Unitaire.innerHTML) * Number(qte.value)
         UpdateTotalPrice()
        
       
        }  )

        
        }

const moinbutton= document.getElementsByClassName('qtyminus minus')
 for (let i=0 ; i<moinbutton.length;i++) {
 
    moinbutton[i].addEventListener('click',function(event) {


      let qte=event.target.nextElementSibling 
      if ( qte.value >0 ){
        qte.value= Number(qte.value) - 1
  
        let Prix_Unitaire = event.target.parentElement.parentElement.nextElementSibling.firstElementChild
  
        let PixTotalPArArticle = event.target.parentElement.parentElement.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling
        
        PixTotalPArArticle.innerHTML = Number(Prix_Unitaire.innerHTML) * Number(qte.value)
        UpdateTotalPrice()
       
      }



    }
  
    )

 }

 var btntrash = document.getElementsByClassName('btnremove')

 for  (let i =0 ; i<btntrash.length;i++) {
    
          btntrash[i].addEventListener('click',function(event) {
            
                 event.target.parentElement.parentElement.parentElement.remove()
                 //containers[i].remove()
                 
                 UpdateTotalPrice()
              
         })

    }


      var btnlove = document.getElementsByClassName('btnadore')

 for  (let i=0 ; i<btnlove.length;i++) {
    
          btnlove[i].addEventListener('click',function() {
            let coeur=document.getElementsByClassName('fas fa-heart')
            let count=0
            const cr=document.getElementsByClassName('nbrefois')
            coeur[i].style.color='red'

             if (coeur[i].style.color =='red') {
              count = count+1
               cr[i].innerHTML= count
             }
              
         })

    } 

    
                   
          
          
          
          
          





  






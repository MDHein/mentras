function searchProducts() { 
  
    let input = document.getElementById('edt-text1').value 
    input=input.toLowerCase(); 

    let x = document.getElementsByClassName('item-card'); 
	
    for (i = 0; i < x.length; i++) {  

        if (!x[i].innerHTML.toLowerCase().includes(input)) { 
            x[i].style.display="none"; 
        }else{ 
            x[i].style.display="block";
            
        } 
    } 
}
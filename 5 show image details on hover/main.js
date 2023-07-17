
 
  function display(element){
    document.getElementById('image').innerHTML =
                                          "<strong>ImageUrl</strong>== "
                                          + element.src 
                                          +  "<br><strong> Alt text</strong>="
                                          + element.alt 
                                          + "<br><strong>Name</strong>== "  
                                          + element.name ;
  }
  function revert(){
    document.getElementById('image').innerHTML = "Hover Over Image.";
  }


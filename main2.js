$('.container').on('click', '#js-shopping-list-form','form>button', e => {
    
    $(document).on('submit',function(){
        return false;
    })

    
     
        const inputVal = $('form input:text').val();
         if (inputVal === ""){
             return false;
         } else {
          $('ul').append(`<li>
          <span class="shopping-item">${inputVal}</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>`)};
          
           console.log(inputVal,"add item")
      
});
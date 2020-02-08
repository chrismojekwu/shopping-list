"use strict";

//adds list item
$('#js-shopping-list-form').on('submit', e => {
    e.preventDefault()
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

  //check/uncheck list item
$('.shopping-list').on('click','.shopping-item-toggle', e => {
    const listItem = $(event.target).closest('li').find('.shopping-item')
    $(listItem).toggleClass('shopping-item__checked')
    
       console.log("item check")
});



//deletes list item
$('.shopping-list').on('click','.shopping-item-delete', e => {
     const listBox = $(event.target).closest('li');
     $(listBox).remove()
    
    console.log("item deleted")
});




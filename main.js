"use strict";

 
$('li').on('click','.shopping-item-toggle', e => {
    const listItem = $(event.currentTarget).find('.shopping-item')
    $(listItem).toggleClass('shopping-item__checked')
    
       console.log("item check")
});




$('li').on('click','.shopping-item-delete', e => {
    const listBox = $(event.currentTarget).closest('li');
     $(listBox).empty()
    
    console.log("item deleted")
});

$('form>button').on('click', e => {
     
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

$(document).ready( function() {
    $(document).on('submit', '#js-shopping-list-form',function(){
        return false;
    })
})
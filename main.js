


$('li').on('click','.shopping-item-toggle', e => {
    
    //toggle this shopping list item name
     $('span.shopping-item').toggleClass('shopping-item__checked');

       console.log("check button")
});


$('ul>li').on('click','.shopping-item-delete', e => {
    
    //delete this li item 
    console.log("delete button")
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
    $(document).on('submit', '#js-shopping-list-form', function(){
        return false;
    })
})
/*Write a page that displays a balloon (using the balloon emoji, 🎈). When you press the up arrow, 
it should inflate (grow) 10 percent, and when you press the down arrow, it should deflate (shrink) 
10 percent.

You can control the size of text (emoji are text) by setting the font-size CSS property (style.fontSize) 
on its parent element. Remember to include a unit in the value—for example, pixels (10px).

The key names of the arrow keys are "ArrowUp" and "ArrowDown". Make sure the keys change only the balloon, 
without scrolling the page.

When that works, add a feature where, if you blow up the balloon past a certain size, it explodes. 
In this case, exploding means that it is replaced with an 💥 emoji, and the event handler is removed 
(so that you can’t inflate or deflate the explosion).

<p>🎈</p>

<script>
  // Your code here
</script>
You’ll want to register a handler for the "keydown" event and look at event.key to figure out whether 
the up or down arrow key was pressed.

The current size can be kept in a binding so that you can base the new size on it. It’ll be helpful to 
define a function that updates the size—both the binding and the style of the balloon in the DOM—so that 
you can call it from your event handler, and possibly also once when starting, to set the initial size.

You can change the balloon to an explosion by replacing the text node with another one (using replaceChild) 
or by setting the textContent property of its parent node to a new string.*/

let og_size = document.querySelector('p');

    window.addEventListener("keydown", e => {

    let emoji = document.getElementById('balloon')
    let newEmoji = document.createTextNode('💥');

    let size = og_size.style.fontSize.replace('px', '');

    size = size == '' ? '50' : size; // size may not be initialized, so default to our intended starting value!
    size = parseInt(size);

    if (e.key == "ArrowUp") {
        og_size.style.fontSize = (size + 10) + 'px';
        
        if (og_size.style.fontSize === 60) {
            document.body.replaceChild(newEmoji, emoji.childNodes[0])
        }

    } else {
        og_size.style.fontSize = (size - 10) + 'px';
    }

});


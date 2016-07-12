##README.md

###Index.html
    - Created two columns, one to show the list of cat names and the other to show the name, image and counter of the selected cat
    - The child elements of both divs are created dynamically using JS

###Counter.js
    - Line [3,5] - declare the list of cats, image urls and counters as arrays
    - Line [8,11] - create the menu list of cat names
    - Line [16,21] - depending on which menu item is clicked, add the resepcetive name, image and counter to the imagepanel
    - line 23 - add a script tag to the body dynamically which will do the following
        - get the currently diplayed image and subsequently its id
        - uing the id, it will get the respective element from the counter array and increment its value
        - it will replace the current counter value with the new one


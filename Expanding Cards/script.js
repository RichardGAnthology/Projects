//querySelectorAll puts all of the panels in a NodeList, similar to an array.
const panels = document.querySelectorAll('.panel')

//for loop where a function is executed for each array element.
panels.forEach(panel => {
    //on every click on a class titled panel a function will be executed -
    panel.addEventListener('click', () => {
        //the function to be excuted on every click is RemoveActiveClasses which 
        //defined on line
        removeActiveClasses()
        //on every click a class 'active' will be added to the class 'panel'
        panel.classList.add('active')
    })
})

//function meant to remove class 'active' from class 'panel'
function removeActiveClasses(){
    //for loop where an action is executed for each array element.
    panels.forEach(panel => {
        //the action to be exexcuted is a remove method of the class 'active'
        //from the class panel. 
        panel.classList.remove('active')
    })
}
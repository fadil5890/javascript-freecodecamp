//  THE FIRST #1
const prepareTea = () => 'greenTea';

const getTea = (numOfCups) => {
    const teaCups = [];
  
    for(let cups = 1; cups <= numOfCups; cups += 1) {
      const teaCup = prepareTea();
      teaCups.push(teaCup);
    }
    return teaCups;
}

const tea4TeamFCC = null;


//  THE SECOND #2
const prepareGreenTea = () => 'greenTea';

const prepareBlackTea = () => 'blackTea';

const getTea = (prepareTea = prepareGreenTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4GreenTeamFCC = getTea(undefined,27);
const tea4BlackTeamFCC = getTea(prepareBlackTea,13);

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);

//  THE THIRD #3
// tabs is an array of titles of each site open within the window
var Window = function(tabs) {
  this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function (otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function (tab) {
  this.tabs.push('new tab'); // Let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function (index) {

  // Only change code below this line

  var tabsBeforeIndex = this.tabs.slice(0, index); //[Netflix, Youtube] Get the tabs before the tab
  var tabsAfterIndex = this.tabs.slice(index + 1); // [Vine] Get the tabs after the tab

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

  // Only change code above this line

  return this;
 };

// Let's create three browser windows
var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// Now perform the tab opening, closing, and other operations
var finalTabs = socialWindow
  .tabOpen() // Open a new tab for cat memes
  .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);

// THE FORTH #4
const ratings = watchList.map( watchList => 
  ({title : watchList['Title'],
    rating : watchList['imdbRating']
    }
  ));

/* TIPS! :
1. Do not change the original variable/data, use a copy of it.
2. Do not use arrow function as methods.
3. It's very good to define an arrow function with a variable name.
4. Another principle of functional programming is to always declare your dependencies 
   explicitly. This means if a function depends on a variable or object being present, 
   then pass that variable or object directly into the function as an argument.
5. Use obj as argument to insert any Javascript object into the function.
6. Input your functions,objects,variable,etc on console.log() to know what the result of it.
7. Use for...in statement in array, not object.
8. 
*/


























//this context
var obj = {
    a: 10,
    b: {
        get : () => {
            console.log(this.a, typeof this.a, this);
            return this.a + 10;
        },
        test : this.a
    },
    test1 : this
  };

console.log(obj.b.test);

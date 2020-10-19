# New Dinosaurs Yay... Question Mark?

### Setup

* Fork
* Clone
* `jest --watch-all`
* See the tests for documentation on each task!


### Hints

`makeDino`

* You can create a new object and put it in a variable, and then return it, and many learners find this more explicit creation easier to follow. Or you can just return the object without putting it in a variable first for less code.
* To make the object default to an extinct status of false, you can run an `if` check to see if the fourth parameter was `undefined`. If it was, instead of setting `extinct` to `undefined`, we can just set it to false!
* For a more succinct version of this, use default parameters. You may have to look it up!

`makeExtinct`

* Remember that you can (and should!) use `makeDino` here, passing it the parameters you want.
* It doesn't matter whether the dino was extinct or not before; it's gonna be now! That's hard-coding, but it makes sense to do it here!

`truncateSpecies`

* It may help to make a new dinosaur first, and then edit that dinosaur's properties, rather than take shortcuts.
* `.species` is just a string, with all the properties you'd expect. Including the `.slice` method, for grabbing everything up to a certain index.

`makeSingular`

* `species` is (still) just a string, and we can check if it ends with (`endsWith`?) another value. String's `.slice` method could come in handy here again, and remember that it can take a negative value. Look it up! I'm not lying! It allows you to grab a portion of the string that starts or ends with an index counting from the END of the string. Pretty cool, right?

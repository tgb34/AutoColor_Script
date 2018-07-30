# AutoColor_Script
Script I made to easily color specific words in worksheets I was making to give it a "theme" across all sheets

## Usage
Think of a word you want to make a specific color. Find the hex value of that color in a Google Doc, for example. 

Add that word, in quotes, to the "conceptArray", an array of "concepts" (words) to scan the document for.

So, if your conceptArray looks like: 
                                  var conceptArray = ["object",
                                        "player"];
   
And you want to search for the word "chocolate", you type your code like this:

                                  var conceptArray = ["object",
                                        "player",
                                        "chocolate"]; 
                                      
You could add the word anywhere, it doesn't need to be in the beginning, middle, or end, for example:

                                  var conceptArray = ["chocolate","object",
                                        "player"];

                                  var conceptArray = ["chocolate",
                                        "object",
                                        "player"];
                                        
                                  var conceptArray = ["object",
                                        "chocolate",
                                        "player"];        
                                       
Then, below, add your word/"concept" to the "conceptToColor" hash table, along with its new hex color, in quotes. For example:       
  
                                  conceptToColor["object"] = "#38761d";
                                  conceptToColor["player"] = "#38761d";
                                  
I would add:

                                  conceptToColor["object"] = "#38761d";
                                  conceptToColor["player"] = "#38761d";
                                  conceptToColor["chocolate"] = "#000000";
                                  
Again, order doesn't matter!

Finally, add the add-on code to a document, and run it. If you're reading this, it probably means you know more about Google Scripts than I do, so I'm sure you can do it!

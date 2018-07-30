/**
 * Find all matches of array text in current document, and highlight them.
 *
 * Automatically checks for singular, capital singular, plural, and capital plural of each word
 *
 * For example, the word "chocolate" would auto check for "chocolate", "chocolates", "Chocolate", and "Chocolates"
 *
 * Entering "chocolates" into the array would auto check for "chocolates", "chocolatess", "Chocolates", and "Chocolatess"
 *
 * If a word being searched contains part of the word from the array, it will have a portion colored
 *
 * For example, if you search for "add", the "Add" in "Addition" would be colored
 *
 */
function autoColor(target,foreground) {
  var conceptToColor = {};
  var conceptArray = ["object",
                      "player",
                      "enemy",
                      "room",
                      "window",
                      "variable", 
                      "click", 
                      "add", 
                      "draw"];
                    
  conceptToColor["object"] = "#38761d";
  conceptToColor["player"] = "#38761d";
  conceptToColor["enemy"] = "#38761d";
  conceptToColor["room"] = "#dd7e6b";
  conceptToColor["window"] = "#0000ff";
  conceptToColor["variable"] = "#ff9900";
  conceptToColor["click"] = "#ff9900";
  conceptToColor["add"] = "#ff9900";
  conceptToColor["draw"] = "#00ffa0";
  
  var foreground = foreground || '#F3E2A9';
  var doc = DocumentApp.getActiveDocument();
  var bodyElement = DocumentApp.getActiveDocument().getBody();
  var searchResult, target;
  
  for(var arrayIter = 0; arrayIter < conceptArray.length; arrayIter++){

    var otarget = conceptArray[arrayIter];
    target = otarget;
    //DocumentApp.getUi().alert(target);  
    for(var i = 0; i < 4; i++){
      //First iteration = singular lowercase (default)
    
      //Second iteration = singular uppercase
      if(i == 1){
        target = target.charAt(0).toUpperCase() + target.slice(1);
      }
    
      //Third iteration = plural uppercase
      else if(i == 2){
        target += 's';
      }
    
      //Fourth iteration = plural lowercase
      else if(i == 3){
        target = target[0].charAt(0).toLowerCase() + target.slice(1);
      }
      
      searchResult = bodyElement.findText(target);
      //Singular lower-case
      

      while (searchResult !== null) {
        var thisElement = searchResult.getElement();
        var thisElementText = thisElement.asText();

        //Logger.log(url);
        thisElementText.setForegroundColor(searchResult.getStartOffset(), searchResult.getEndOffsetInclusive(),conceptToColor[otarget]);

        // search for next match
        searchResult = bodyElement.findText(target, searchResult);
      }
    }
  }
}

/**
 * Create custom menu when document is opened.
 */
function onOpen() {
  DocumentApp.getUi().createMenu('Custom')
      .addItem('Auto-color', 'autoColor')

      .addToUi();
}

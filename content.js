chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
       if (request.content) {

           console.log("Received content from plugin:");
           console.log(request.content);

           var tokens = request.content.split("\n");
           console.log("tokens.length => " + tokens.length);

           //holds the total occurrences of the token in the DOM
           var count = 0;

           // iterate over all DOM elements
           $("*").each(function( ) {
               for (i = 0; i < tokens.length; i++) {
                   var text = $(this).text();
                   console.log( $(this) );
                   if (text.indexOf(tokens[i]) != -1) {
                       console.log("A token was found: " + tokens[i]);
                       console.log("Token: " + tokens[i]);
                       //$(this).css("background-color", "orange");
                       count++;
                   }
               }
           });

           if (count != 0) { console.log("Found " + count + " times") }
       }
    });

function getText(node) {
    if (node.nodeType === 3) {
        return node.data;
    }

    var txt = '';

    if (node = node.firstChild) do {
        txt += getText(node);
    } while (node = node.nextSibling);

    return txt;
}
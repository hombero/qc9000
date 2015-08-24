$("#submit_content").click( function () {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var contentDoc = $('#contentdoc1987').val();

        chrome.tabs.sendMessage(tabs[0].id, {content: contentDoc}, function(response) {
            console.log(response.farewell);
        });
    });
});

$(".collapse-btn").click(function () {

    $header = $(this);
    //getting the next element
    $content = $header.next();
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content.slideToggle(500, function () {
        //execute this after slideToggle is done
        //change text of header based on visibility of content div
        // $header.text(function () {
        //     //change text based on condition
        //     return $content.is(":visible") ? "Collapse" : "Expand";
        // });

        /* Rotate the fa-icon */
        $arrowicon = $($header.children()[0]);
        $arrowicon = $($arrowicon.children()[0]);
        console.log($arrowicon);
        $arrowicon.toggleClass("fa-angle-down");
        $arrowicon.toggleClass("fa-angle-up");
    });

});
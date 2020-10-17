console.log("yes")

function changeContentFunction(resource) {
    $(document).ready(() => {
        $("#div1").load(resource)
    })
}

function goToSubTopic(resource, subtopic) {
    $(document).ready(() => {
        $("#div1").load(resource)
        window.location.hash = subtopic

    })
}

$(".subbutton").click(function() {

    if ($(this).parent().children("div.submenu").css("display") == "none") {
        $(this).parent().children("div.submenu").show()
    } else {
        $(this).parent().children("div.submenu").hide()
    }
})


$("#btnSubmit").click(function () {
    alert("It worked!")
});

$("#textBoxSubButton").click(function () {
    event.preventDefault();
    let textBox = $("input[type*='text']").val();
    alert(textBox);
    let createDiv = $("<div></div>"); //$ same as document.createElement("div")
    $("body").append(createDiv);

    let createH2 = $(`<h2>${textBox}</h2>`);
    (createDiv).append(createH2);

    $("h2")
        .on("mouseover", function () {
            $(this).css({
                "background-color": "blue",
                "border-radius": "50px 20px"
            });
        });
});

$("#allInputs").keyup(function () {
    if ($("input[type*='submit']").val() == "") {
        $(".enableOn").prop("disabled", true);
    } else {
        $(".enableOn").prop("disabled", false);
    }
});

















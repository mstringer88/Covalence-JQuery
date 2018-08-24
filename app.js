$("#btnSubmit").click(function () {
    alert("It worked!")
});

$("#textBoxSubButton").click(function () {
    event.preventDefault();
    let textBox = $("input[type*='text']").val();
    alert(textBox);
    let createDiv = $("<div></div>"); //$ same as document.createElement("div")
    $("body").append(createDiv);

    let createUl = $("<ul></ul>"); //$ same as document.createElement(element)
    $("body").append(createUl);

    let createLi = $(`<li>${textBox}</li>`);
    (createUl).append(createLi);

    $(createLi).click(function () {
        let colors = ["blue", "green", "red", "orange", "yellow"];
        let ranColor = colors[Math.floor(Math.random() * colors.length)];
        $(createLi).css({"color": ranColor});
        console.log(ranColor);
    });
});

$("li")
    .dblclick(function () {
        $(this).remove()
        let whatIsThis = $(this);
        console.log(whatIsThis);
    });


// let createH2 = $(`<h2>${textBox}</h2>`);
// (createDiv).append(createH2);

// $("h2")
//     .on("mouseover", function () {
//         $(this).css({
//             "background-color": "blue",
//             "border-radius": "50px 20px"
//         });
//     });


$("#allInputs").keyup(function () {
    if ($("input[type*='submit']").val() == "") {
        $(".enableOn").prop("disabled", true);
    } else {
        $(".enableOn").prop("disabled", false);
    }
});


















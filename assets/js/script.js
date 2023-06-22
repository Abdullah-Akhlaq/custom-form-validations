$(document).ready(function () {
  $("#myForm").validate({
    errorElement: "span",
    errorClass: "error",
    errorPlacement: function (error, element) {
      // Modify the error placement logic to handle custom error messages with icons and red color
      var errorContainer = $(element)
        .closest(".form-group")
        .find(".error-container");
      if (errorContainer.length === 0) {
        errorContainer = $('<div class="error-container"></div>').appendTo(
          $(element).closest(".form-group")
        );
      }
      errorContainer.html(
        '<i class="fas fa-exclamation-circle error-icon"></i>' +
          " " +
          '<span class="error-message">' +
          error.text() +
          "</span>"
      );
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass("is-invalid");
      $(element).closest(".form-group").addClass("has-error");
      $(element).siblings(".error-container").addClass("has-error"); // Add this line to highlight the error container
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).removeClass("is-invalid");
      $(element).closest(".form-group").removeClass("has-error");
      $(element).siblings(".error-container").removeClass("has-error"); // Add this line to remove the highlighting from the error container
      $(element).closest(".form-group").find(".error-container").empty();
    },
    showErrors: function (errorMap, errorList) {
      // Override the default showErrors function to prevent default error messages
      this.defaultShowErrors();
    },

    rules: {
      firstName: "required",
      lastName: "required",
      addressLine1: "required",
      city: "required",
      state: "required",
      zipCode: {
        required: true,
        digits: true,
      },
      phone: {
        required: true,
        digits: true,
      },
      email: {
        required: true,
        email: true,
      },
      howDidYouHear: "required",
    },
    messages: {
      firstName: "Please enter your first name",
      lastName: "Please enter your last name",
      addressLine1: "Please enter your address",
      city: "Please enter your city",
      state: "Please select your state",
      zipCode: {
        required: "Please enter your zip code",
        digits: "Please enter a valid zip code",
      },
      phone: {
        required: "Please enter your phone number",
        digits: "Please enter a valid phone number",
      },
      email: {
        required: "Please enter your email address",
        email: "Please enter a valid email address",
      },
      howDidYouHear: "Please select how you heard about us",
    },
    submitHandler: function (form) {
      form.submit();
    },
  });
});

$(document).ready(function () {
  $("#contactUs").validate({
    errorElement: "span",
    errorClass: "error",
    errorPlacement: function (error, element) {
      if (
        element.attr("name") === "inSelectHelp" ||
        element.attr("name") === "typeOfContact" ||
        element.attr("name") === "CheckBoxToValidate" ||
        element.attr("name") === "insurance" ||
        element.attr("name") === "besttimecontact" ||
        element.attr("name") === "confirmAnswers"
      ) {
        var errorContainer = $(element)
          .closest(".row")
          .find(".error-container");
        if (errorContainer.length === 0) {
          errorContainer = $('<div class="error-container"></div>').insertAfter(
            element
          );
        }
        errorContainer.html(
          '<i class="fas fa-exclamation-circle error-icon"></i>' +
            " " +
            '<span class="error-message">' +
            error.text()
        );
      } else {
        var errorContainer = $(element)
          .closest(".form-group")
          .find(".error-container");
        if (errorContainer.length === 0) {
          errorContainer = $('<div class="error-container"></div>').appendTo(
            $(element).closest(".form-group")
          );
        }
        errorContainer.html(
          '<i class="fas fa-exclamation-circle error-icon"></i>' +
            " " +
            '<span class="error-message">' +
            error.text() +
            "</span>"
        );
      }
      $('input[name="inSelectHelp"]').on("change", function () {
        $(this).closest(".row").find(".error-container").empty();
      });
      $('input[name="typeOfContact"]').on("change", function () {
        $(this).closest(".row").find(".error-container").empty();
      });
      $('input[name="CheckBoxToValidate"]').on("change", function () {
        $(this).closest(".row").find(".error-container").empty();
      });
      $('input[name="insurance"]').on("change", function () {
        $(this).closest(".row").find(".error-container").empty();
      });
      $('input[name="besttimecontact"]').on("change", function () {
        $(this).closest(".row").find(".error-container").empty();
      });
      $('input[name="confirmAnswers"]').on("change", function () {
        $(this).closest(".row").find(".error-container").empty();
      });
    },
    highlight: function (element) {
      $(element).addClass("is-invalid");
      $(element).closest(".form-group").addClass("has-error");
      $(element).siblings(".error-container").addClass("has-error"); // Add this line to highlight the error container
    },
    unhighlight: function (element) {
      $(element).removeClass("is-invalid");
      $(element).closest(".form-group").removeClass("has-error");
      $(element).siblings(".error-container").removeClass("has-error"); // Add this line to remove the highlighting from the error container
      $(element).closest(".form-group").find(".error-container").empty();
    },
    showErrors: function () {
      // Override the default showErrors function to prevent default error messages
      this.defaultShowErrors();
    },

    rules: {
      firstName: "required",
      lastName: "required",
      confirmAnswers:"required",
      
      
      businessagencyname: "required",
      securityCode: {
        required: true,
        digits: true,
      },
      numberofemployees: {
        required: true,
        digits: true,
      },
      zipCode: {
        required: true,
        digits: true,
      },
      phone: {
        required: true,
        digits: true,
      },
      email: {
        required: true,
        email: true,
      },
      howDidYouHear: "required",
      inSelectHelp: "required",
      typeOfContact: "required",
      CheckBoxToValidate: "required",
      insurance: "required",
      besttimecontact: "required",

      // Add the rule for radio button validation
    },
    messages: {
      firstName: "Please enter your first name",
      insurance: "Please Select an Option",
      lastName: "Please enter your last name",  
      besttimecontact: "Please Select an Option",
      confirmAnswers: "Please select to confirm your answer",
      businessagencyname: "Please enter business/agency name ",
      securityCode: {
        required: "Please enter your security Code",
        digits: "Please enter a valid security Code",
      },
      numberofemployees: {
        required: "Please enter your employees number",
        digits: "Please enter a valid employees number",
      },
      zipCode: {
        required: "enter your zip code",
        digits: "enter a valid zip code",
      },
      phone: {
        required: "Please enter your phone number",
        digits: "Please enter a valid phone number",
      },
      email: {
        required: "Please enter your email address",
        email: "Please enter a valid email address",
      },
      inSelectHelp: "Please select an option",
      CheckBoxToValidate: "Please Select an Option",
      typeOfContact: "Please select an option", // Add the message for radio button validation
    },
    submitHandler: function (form) {
      form.submit();
    },
  });
});

//toggle other field
function toggleOtherInput(radio) {
  var otherRadio = document.getElementById("inSelectHelpOther");
  var otherInput = document.getElementById("inSelectHelpOtherText");

  if (radio === otherRadio) {
    otherInput.style.display = "block";
  } else {
    otherInput.style.display = "none";
  }

  var radios = document.getElementsByName("inSelectHelp");
  for (var i = 0; i < radios.length; i++) {
    radios[i].parentElement.classList.remove("selected");
  }

  radio.parentElement.classList.add("selected");
}

// Get the select all checkbox

$("input[name='CheckBoxToValidate']").change(function () {
  $.each($("input[name='CheckBoxToValidate']"), function () {
    this.setCustomValidity("");
  });
  var checked = $("input[name='CheckBoxToValidate']:checked").length;
  if (checked == 0) {
    $("input[name='CheckBoxToValidate']")[0].setCustomValidity(
      "Please select at least one checkbox."
    );
  }
});

$("#checkboxform").submit(function () {
  var checked = $("input[name='CheckBoxToValidate']:checked").length;
  if (checked == 0) {
    $("input[name='CheckBoxToValidate']")[0].setCustomValidity(
      "Please select at least one checkbox."
    );
    return false;
  } else {
    alert("At least one checkbox was checked!");
    return false;
  }
});

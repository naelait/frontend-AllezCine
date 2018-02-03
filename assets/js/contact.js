$("#sendMessage-js").click(function() {
  var firstName = $("#firstName-js").val()
  var lastName = $("#lastName-js").val()
  var email = $("#email-js").val()
  var subject = $("#subject-js").val()
  var message = $("#message-js").val()
  alert(
      `
      First Name : ${firstName}

      Last Name : ${lastName}

      Email : ${email}

      Subject : ${subject}

      Message :
      ${message}
     `)
})

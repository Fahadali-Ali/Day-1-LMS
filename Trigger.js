
function validateForm() {
    let x = document.forms["myForm"]["uname"].value;
    if (x == "") {
      alert("User Name must be filled out");
      return false;
    }
    else
      alert("Your Data is  Submited");
  }

  function validateForm() {
    let y = document.forms["myForm"]["upsswrd"].value;
    if (y == "") {
      alert("User Name and Password must be filled out");
      return false;
    }
    else
      alert("Your Data is  Submited");
  }
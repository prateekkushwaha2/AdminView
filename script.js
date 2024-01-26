function updateValue1() {
    // Get the form element
    var form = document.getElementById("myForm1");

    // Access the input field value by its name
    var inputValue1 = form.elements["inputField1"].value;
    var inputValue1_1 = form.elements["inputField1_1"].value;

    // Store the value in local storage
    localStorage.setItem("adminPanelValue1", inputValue1);
    localStorage.setItem("adminPanelValue1_1", inputValue1_1);

    
    // Redirect to another HTML file (admin.html)
    window.location.href = "admin.html";
  
}
var storedValue1 = localStorage.getItem("adminPanelValue1");
var form1 = document.getElementById("myForm1-data")
form1.textContent = storedValue1;
//form1 done here

function updateValue2() {
    // Get the form element
    var form = document.getElementById("myForm2");

    // Access the input field value by its name
    var inputValue2 = form.elements["inputField2"].value;
    var inputValue2_1 = form.elements["inputField2_1"].value;
    
    // Store the value in local storage
    localStorage.setItem("adminPanelValue2", inputValue2);
    localStorage.setItem("adminPanelValue2_1", inputValue2_1);
    
    // Redirect to another HTML file (admin.html)
    window.location.href = "admin.html";
  
}
var storedValue2 = localStorage.getItem("adminPanelValue2");
var form2 = document.getElementById("myForm2-data")
form2.textContent = storedValue2;


//ends here form2

function updateValue3() {
    // Get the form element
    var form = document.getElementById("myForm3");

    // Access the input field value by its name
    var inputValue3 = form.elements["inputField3"].value;
    var inputValue3_1 = form.elements["inputField3_1"].value;

    // Store the value in local storage
    localStorage.setItem("adminPanelValue3", inputValue3);
    localStorage.setItem("adminPanelValue3_1", inputValue3_1);
    
    // Redirect to another HTML file (admin.html)
    window.location.href = "admin.html";
  
}
var storedValue3 = localStorage.getItem("adminPanelValue3");
var form3 = document.getElementById("myForm3-data")
form3.textContent = storedValue3;
function addnewWeField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("experiencefield");
  newNode.classList.add("mt-2");

  newNode.setAttribute("rows", 2);
  newNode.setAttribute("placeholder", "Enter here");

  let weOb = document.getElementById("we");
  let PWEaddOb = document.getElementById("PWEadd");

  weOb.insertBefore(newNode, PWEaddOb);
}

function addnewAQField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("academicfield");
  newNode.classList.add("mt-2");

  newNode.setAttribute("rows", 2);
  newNode.setAttribute("placeholder", "Enter here");

  let AQOb = document.getElementById("aq");
  let AQaddOb = document.getElementById("AQadd");

  AQOb.insertBefore(newNode, AQaddOb);
}

function generateResume() {
  let namespace = document.getElementById("namespace").value;

  let nameT = document.getElementById("nameT");

  nameT.innerHTML = namespace;

  //another way for the same thing --->
  document.getElementById("nameT2").innerHTML = namespace;

  document.getElementById("contactT").innerHTML =
    document.getElementById("contactspace").value;

  document.getElementById("addressT").innerHTML =
    document.getElementById("addressspace").value;

  document.getElementById("fbT").innerHTML =
    document.getElementById("fbfield").value;

  document.getElementById("igT").innerHTML =
    document.getElementById("igfield").value;

  document.getElementById("linkedinT").innerHTML =
    document.getElementById("linkedinfield").value;

  document.getElementById("objectiveT").innerHTML =
    document.getElementById("objectivefield").value;

  let workExperiences = document.getElementsByClassName("wefield");

  let str = "";

  for (let x of workExperiences) {
    str = str + `<li> ${x.value} </li>`;
  }

  document.getElementById("we-T").innerHTML = str;

  let AQs = document.getElementsByClassName("aqfield");

  let str2 = "";

  for (let x of workExperiences) {
    str2 = str2 + `<li> ${x.value} </li>`;
  }

  document.getElementById("AQ-T").innerHTML = str2;

  document.getElementById("resume-form").style.display = "none";
  document.getElementById("resume-template").style.display = "block";
}

function printResume() {
  window.print();
}

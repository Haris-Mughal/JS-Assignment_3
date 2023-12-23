document.getElementById("simpleAlert").onclick = function () {
  alert("I am a simple alert");

  document.getElementById("output").innerHTML = "I am a simple alert";
  document.getElementById("input-text").value = "";
};

document.getElementById("printName").onclick = function () {
  // document.getElementById("input-text").value;
  let name = document.getElementById("input-text").value;
  if (name = "") {
    alert("Please Enter Your Name");
    return;
  } else {
    document.getElementById("output").innerText = name;
  }
};

document.getElementById("printCities").onclick = function () {
  document.getElementById("output").innerHTML = "";
  let cities = [
    "Faisalabad",
    "Lahore",
    "Multan",
    "Quetta",
    "Peshawar",
    "Islamabad",
    "Karachi",
  ];
  for (let index = 0; index < cities.length; index++) {
    let indexnum = index + 1;
    document.getElementById("output").innerHTML +=
      indexnum + ") " + " " + cities[index] + "<br />";
  }
};

document.getElementById("addCityList").onclick = function () {
  document.getElementById("output").innerHTML = "";
  let cities = [
    "Faisalabad",
    "Lahore",
    "Multan",
    "Quetta",
    "Peshawar",
    "Islamabad",
    "Karachi",
  ];
  let yourCity = document.getElementById("input-text").value;
  if (yourCity == "") {
    alert("Enter Your City Name");
    return;
  } else {
    let newCities = cities.push(yourCity);
    for (let index = 0; index < cities.length; index++) {
      let indexnum = index + 1;
      document.getElementById("output").innerHTML +=
        indexnum + ") " + " " + cities[index] + "<br />";
    }
  }

  document.getElementById("generateTable").onclick = function () {
    document.getElementById("output").innerHTML = "";
    let num = document.getElementById("input-text").value;
    if (num == "") {
      alert("Enter Any Number");
    } else {
      for (let i = 1; i < 11; i++) {
        let result = i * num;
        document.getElementById("output").innerHTML +=
          num + " " + "*" + i + " " + "=" + result + "<br />";
      }
    }
  };
};
// clearoutput
document.getElementById("clearoutput").onclick = function () {
  document.getElementById("output").innerText = "";
};
// clearInput
document.getElementById("clearinput").onclick = function () {
  document.getElementById("input-text").value = "";
};

// // ...........................................

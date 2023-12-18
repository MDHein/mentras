document.addEventListener("DOMContentLoaded", getGahtar);

async function getGahtar() {
 try {
  const response = await
  fetch("https://raw.githubusercontent.com/MDHein/mentras/main/data/one.json");
  if (!response.ok) {
   throw new Error("Failed to fetch Gahtar");
  }
  const gahtars = await response.json();
  showGahtar(gahtars);

 } catch (error) {
  console.error(error);
 }
}

function showGahtar(gahtars) {
 let container = document.getElementById("listView");

 for (let i = 0; i < gahtars.length; i++) {
  let item = document.createElement("li");
  container.appendChild(item);


  let title = document.createElement("h3");
  title.textContent = gahtars[i].name;
  item.appendChild(title);

  let descText = gahtars[i].desc;
  if (descText.length > 100) {
   descText = descText.substring(0, 100)+ "..." + " <span style='color:#C04000; font-weight: bold;'>ပိုမိုဖတ်ရှုရန်</span>";
  }

  let desc = document.createElement("p");
  desc.innerHTML = descText;
  item.appendChild(desc);

  item.addEventListener("click", () => {
   let t = gahtars[i].name;
   let d = gahtars[i].desc;
   viewDialog(t, d);
  });
 }
}

function searchGahtar() {

 let input = document.getElementById('edt').value
 input = input.toLowerCase();

 let x = document.getElementsByTagName('li');

 for (i = 0; i < x.length; i++) {

  if (!x[i].innerHTML.toLowerCase().includes(input)) {
   x[i].style.display = "none";
  } else {
   x[i].style.display = "block";

  }
 }
}

function viewDialog(t, d) {
 document.body.style.overflow = "hidden";
 document.getElementById("dialogLayout").style.display = "flex";
 document.getElementById("dialogTitle").innerHTML = t;
 document.getElementById("dialogDescription").innerHTML = d;
}
function closeDialog() {
 document.body.style.overflow = "auto";
 document.getElementById("dialogLayout").style.display = "none";
}
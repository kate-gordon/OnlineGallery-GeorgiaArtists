//Select handles showing the correct form when you press on a button in any of the management pages

function select(id) {
  currentbutton = document.getElementById(`buttid_${id}`);
  currentdiv = document.getElementById(`divid_${id}`);
  olddiv = document.querySelector(".show");
  oldbutt = document.querySelector(".buttonselect");

  if (olddiv) {
    olddiv.className = "hide";
  }
  if (oldbutt) {
    oldbutt.className = "button";
  }
  currentbutton.className = "buttonselect";
  currentdiv.className = "show";
}

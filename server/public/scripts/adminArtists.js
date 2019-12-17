function artistSelect(id) {
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

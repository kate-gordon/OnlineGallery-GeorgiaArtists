function artistSelect(id) {
  currentbutton = document.getElementById(`buttid_${id}`);
  currentdiv = document.getElementById(`divid_${id}`);
  olddiv = document.querySelector(".artistshow");
  oldbutt = document.querySelector(".artistbuttonselect");

  if (olddiv) {
    olddiv.className = "artisthide";
  }
  if (oldbutt) {
    oldbutt.className = "artistbutton";
  }
  currentbutton.className = "artistbuttonselect";
  currentdiv.className = "artistshow";
}

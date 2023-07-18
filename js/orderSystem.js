function toggleBox(boxId) {
  var box = document.getElementById(boxId);
  var boxes = document.getElementsByClassName('box-system');
  var titleSys = document.getElementsByClassName('title-sys');
  
  for (var i = 0; i < boxes.length; i++) {
    if (boxes[i] === box) {
      boxes[i].style.display = 'block';
      titleSys[i].style.color = '#17183B';
    } else {
      boxes[i].style.display = 'none';
      titleSys[i].style.color = '#A2A3B1';
    }
  }
}
var lis = document.querySelectorAll('ul.board li.pear');
count = [];

for (let i = 0; i < lis.length; i++) {
  count[i] = 0;
  let li = lis[i];
  li.addEventListener('click', function() {
    count[i]++;
    li.className = 'isTestClicked';
    if (count[i] > 1) {
      li.className = 'sky';
    }
  });
  
}

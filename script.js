
  let buttonBar = document.querySelector('.button-bar');

  buttonBar.addEventListener('click', function(e){

    const color = e.target.innerText;
    buttonBar.style.backgroundColor = color;
  });

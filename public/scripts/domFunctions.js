// functions to highlight selected pokemon
let list = document.querySelectorAll('.radioInput');

function changeDefaultCheckedBackground() {
  for (let i = 0; i < list.length; i++) {
    if (list[i].checked === true) {
      list[i].parentElement.parentElement.classList.toggle('checkedPokemon');
    }
  }
}

changeDefaultCheckedBackground();

document.addEventListener('change', (event) => {
  if (!event.target.matches('.radioInput')) return;
	if (event.target.matches('.radioInput')) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].checked === false) {
        list[i].parentElement.parentElement.classList.remove('checkedPokemon');
      } else {
        list[i].parentElement.parentElement.classList.add('checkedPokemon');
      }
    }
	}
});
const tab1 = document.querySelector('#tab-1');
const tab2 = document.querySelector('#tab-2');
const schedule1 = document.querySelector('#schedule-1');
const schedule2 = document.querySelector('#schedule-2');

function resetTabs() {
  tab1.style.backgroundColor = '#404e6c';
  tab1.style.color = '#b0b4be';
  tab2.style.backgroundColor = '#404e6c';
  tab2.style.color = '#b0b4be';
}

tab1.addEventListener('click', () => {
  resetTabs();
  tab1.style.backgroundColor = '#b0b4be';
  tab1.style.color = '#404e6c';

  if (schedule1.style.display === 'block') {
    schedule1.style.display = 'none';
  } else schedule1.style.display = 'block';

  if (schedule2.style.display === 'block') {
    schedule2.style.display = 'none';
  }
});

tab2.addEventListener('click', () => {
  resetTabs();
  tab2.style.backgroundColor = '#b0b4be';
  tab2.style.color = '#404e6c';

  if (schedule2.style.display === 'block') {
    schedule2.style.display = 'none';
  } else schedule2.style.display = 'block';

  if (schedule1.style.display === 'block') {
    schedule1.style.display = 'none';
  }
});

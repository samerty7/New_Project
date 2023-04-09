const widgetContainer = document.getElementById('widget-container');
const widget = document.getElementById('widget');
const panel = document.getElementById('panel');
const diceType = document.getElementById('dice-type');
const numDice = document.getElementById('num-dice');
const rollButton = document.getElementById('roll-button');
const result = document.getElementById('result');

widget.addEventListener('click', () => {
  panel.classList.toggle('expanded');
});

rollButton.addEventListener('click', () => {
  const type = diceType.value;
  const num = numDice.value;
  let total = 0;
  for (let i = 0; i < num; i++) {
    total += Math.floor(Math.random() * type) + 1;
  }
  result.textContent = `You rolled ${num}D${type}: ${total}`;
});

const input = document.getElementById('result');
const DELBtn = document.getElementById('del');
const ResetBtn = document.getElementById('reset');
const Equals = document.getElementById('eval');
const btn = document.getElementsByClassName('button');

let result = '';
input.value = result;

Array.from(btn).forEach((button) => {
  button.addEventListener('click', (e) => {
    result += e.target.value;
    input.value = result;
  });
});

const Evaluate = () => {
  try {
    result = eval(result);
    input.value = result;
  } catch (err) {
    result = 'error';
    input.value = 'error';
  }
}

const Reset = () => {
  result = '';
  input.value = result;
}

const Delete = () => {
  result = result.slice(0, -1);
  input.value = result;
}

ResetBtn.addEventListener('click', Reset);
DELBtn.addEventListener('click', Delete);
Equals.addEventListener('click', Evaluate);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    Evaluate();
  } else if (e.key === 'Backspace') {
    e.preventDefault();
    Delete();
  } else if (/[0-9+\-*/.]/.test(e.key)) {
    result += e.key;
    input.value = result;
  } else if (e.key === 'Escape') {
    Reset();
  }
});

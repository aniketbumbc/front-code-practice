const input = document.querySelector('input');
const defaultText = document.getElementById('default');
const debounceText = document.getElementById('debounce');
const throttlingText = document.getElementById('throttle');

const updateDebounceText = debounce((text) => {
  debounceText.textContent = text;
});

const updateThrottleText = throttle((text) => {
  throttlingText.textContent = text;
});

input.addEventListener('input', (e) => {
  defaultText.textContent = e.target.value;
  updateDebounceText(e.target.value);
  updateThrottleText(e.target.value);
});

/**
 * debounce
 * @param {*} cb
 * @param {*} delay
 */

function debounce(cb, delay = 2000) {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

/**
 * throttle
 * @param {*} cd
 * @param {*} delay
 */
function throttle(cd, delay = 2000) {
  let showText = false;
  let waitingArgs;

  const timeoutFunc = () => {
    if (waitingArgs == null) {
      showText = false;
    } else {
      cd(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, delay);
    }
  };

  return (...args) => {
    if (showText) {
      waitingArgs = args;
      return;
    }
    cd(...args);
    showText = true;
    setTimeout(timeoutFunc, delay);
  };
}

const documentBody = document.querySelector('body');

// Track the browser fontsize:
const remBox = document.getElementById('remBox');
const remText = document.getElementById('remValue');

const ro = new ResizeObserver(entries => {

  entries.forEach(entry => {

    const fontSize = parseFloat(window.getComputedStyle(entry.target).fontSize);

    remBox.parentElement.style.fontSize = fontSize + 'px';

    const remWidth = window.getComputedStyle(remBox).width;
    remValue.innerHTML = remWidth;
  });
});

ro.observe(remBox.parentElement);


// Switch between values: px and rem
const responsiveValuesSwitch = document.getElementById('responsiveValuesSwitch');

if (responsiveValuesSwitch) {

  const measure = localStorage.getItem('measure');

  if (measure) {
    document.documentElement.setAttribute('data-measure', measure);
    responsiveValuesSwitch.querySelector(`[value="${measure}"]`).setAttribute('checked', 'checked');
  }

  responsiveValuesSwitch.addEventListener('change', function(event) {
    const newMeasure = event.target.value;
    document.documentElement.setAttribute('data-measure', newMeasure);
    localStorage.setItem('measure', newMeasure);
  });
}

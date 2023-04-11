const documentBody = document.querySelector('body');
console.log(documentBody);

// Track the browser fontsize
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



// Switch between responsive values
const responsiveValuesSwitch = document.getElementById('responsiveValuesSwitch');

if (responsiveValuesSwitch) {

  responsiveValuesSwitch.addEventListener('change', function(event) {
    const newMeasure = event.target.value;
    document.documentElement.setAttribute('data-measure', newMeasure);
  });

}

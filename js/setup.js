'use strict';
var setupOpen;
var setup;
var setupClickOpen;
var setupClose;
var setupClickClose;
var wizard;
var wizardCoat;
var wizardCoatColors;
var coatColorNumber;
var coatColorSelect;
var wizardCoatChange;
var wizardEyes;
var wizardEyesColors;
var eyesColorNumber;
var wizardEyesColors;
var eyesColorSelect;
var wizardEyesChange;
var fireball;
var fireballColors;
var fireballColorNumber;
var fireballColorSelect;
var fireballChange;

setupOpen = document.querySelector('.setup-open');
setup = document.querySelector('.setup');
setupClickOpen = function () {
  setup.classList.remove('invisible');
};
setupOpen.addEventListener('click', setupClickOpen);

setupClose = setup.querySelector('.setup-close');
setupClickClose = function () {
  setup.classList.add('invisible');
};
setupClose.addEventListener('click', setupClickClose);

wizard = document.querySelector('#wizard');
wizardCoat = wizard.querySelector('#wizard-coat');
wizardCoatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
coatColorNumber = 0;
coatColorSelect = function () {
  if (coatColorNumber === wizardCoatColors.length - 1) {
    coatColorNumber = 0;
  } else {
    coatColorNumber++;
  }
  return wizardCoatColors[coatColorNumber];
};
wizardCoatChange = function () {
  wizardCoat.style.fill = coatColorSelect();
};
wizardCoat.addEventListener('click', wizardCoatChange);

wizardEyes = wizard.querySelector('#wizard-eyes');
wizardEyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
eyesColorNumber = 0;
eyesColorSelect = function () {
  if (eyesColorNumber === wizardEyesColors.length - 1) {
    eyesColorNumber = 0;
  } else {
    eyesColorNumber++;
  }
  return wizardEyesColors[eyesColorNumber];
};
wizardEyesChange = function () {
  wizardEyes.style.fill = eyesColorSelect();
};
wizardEyes.addEventListener('click', wizardEyesChange);

fireball = document.querySelector('.setup-fireball-wrap');
fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
fireballColorNumber = 0;
fireballColorSelect = function () {
  if (fireballColorNumber === fireballColors.length - 1) {
    fireballColorNumber = 0;
  } else {
    fireballColorNumber++;
  }
  return fireballColors[fireballColorNumber];
};
fireballChange = function () {
  fireball.style.background = coatColorSelect();
};
fireball.addEventListener('click', fireballChange);

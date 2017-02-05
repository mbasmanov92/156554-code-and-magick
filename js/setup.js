'use strict';
var setupOpen;
var setup;
var setupClickOpenMouse;
var setupClickOpenKeyboard;
var ENTER;
var ESC;
var setupClose;
var setupClickCloseMouse;
var setupClickCloseKeyboard;
var wizard;
var wizardCoat;
var wizardCoatColors;
var coatColorNumber;
var coatColorSelect;
var wizardCoatChange;
var wizardEyes;
var wizardEyesColors;
var eyesColorNumber;
var eyesColorSelect;
var wizardEyesChange;
var fireball;
var fireballColors;
var fireballColorNumber;
var fireballColorSelect;
var fireballChange;
var setupUserName;

setupOpen = document.querySelector('.setup-open');
setup = document.querySelector('.setup');
setupClickOpenMouse = function () {
  setup.classList.remove('invisible');
};

ENTER = 13;
ESC = 27;
setupClickOpenKeyboard = function (event) {
  if (event.keyCode === ENTER) {
    setup.classList.remove('invisible');
  }
  if (event.keyCode === ESC) {
    setup.classList.add('invisible');
  }
};
setupOpen.addEventListener('click', setupClickOpenMouse);
setupOpen.addEventListener('keydown', setupClickOpenKeyboard);

setupClose = setup.querySelector('.setup-close');
setupClickCloseMouse = function () {
  setup.classList.add('invisible');
};

setupClickCloseKeyboard = function (event) {
  if (event.keyCode === ENTER) {
    setup.classList.add('invisible');
  }
};
setupClose.addEventListener('click', setupClickCloseMouse);
setupClose.addEventListener('keydown', setupClickCloseKeyboard);

wizard = document.querySelector('#wizard');
wizardCoat = wizard.querySelector('#wizard-coat');
wizardCoatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
coatColorNumber = 0;
coatColorSelect = function () {
  coatColorNumber = (coatColorNumber + 1) % wizardCoatColors.length;
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
  eyesColorNumber = (eyesColorNumber + 1) % wizardEyesColors.length;
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
  fireballColorNumber = (fireballColorNumber + 1) % fireballColors.length;
  return fireballColors[fireballColorNumber];
};
fireballChange = function () {
  fireball.style.background = fireballColorSelect();
};
fireball.addEventListener('click', fireballChange);

setupUserName = document.querySelector('.setup-user-name');
setupUserName.setAttribute('required', true);
setupUserName.setAttribute('maxlength', 50);

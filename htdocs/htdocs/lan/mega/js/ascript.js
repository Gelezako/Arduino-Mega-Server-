/* -----------------------------------------
  ascript.js v.0.1
  part of Arduino Mega Server project
  Generic JavaScript functions 
-------------------------------------------- */

// Date & time

function month(mon) {
  switch (mon) {
    case "1": return "������"; break;
    case "2": return "�������"; break;
    case "3": return "�����"; break;
    case "4": return "������"; break;
    case "5": return "���"; break;
    case "6": return "����"; break;
    case "7": return "����"; break;
    case "8": return "�������"; break;
    case "9": return "��������"; break;
    case "10": return "�������"; break;
    case "11": return "������"; break;
    case "12": return "�������"; break;
    default: return ""; break;
  }
}

function weekday(day) {
  switch (day) {
    case "1": return "�����������"; break;
    case "2": return "�����������"; break;
    case "3": return "�������"; break;
    case "4": return "�����"; break;
    case "5": return "�������"; break;
    case "6": return "�������"; break;
    case "7": return "�������"; break;
     default: return ""; break;
  }
}

// Network

function randomNoCache() {
  var random = Math.round(Math.random() * 10000);
  if (random < 10) {random *= 1000;}
  if (random < 100) {random *= 100;}
  if (random < 1000) {random *= 10;}
  return "&nocache=" + random;
}

// Data colors

var modulDisable = "#555555";
var modulPassive = "#887711";
var modulActive = "#1188dd";

function modulBackground(state) {
  switch (state) {
    case "0": return modulPassive; break;
    case "1": return modulActive; break;
     default: return modulDisable; break;
  }
}

function modulColor(state) {
  switch (state) {
    case "0": return "#eeeeee"; break;
    case "1": return "#ffffff"; break;
     default: return "#aaaaaa"; break;
  }
}

function contactBackground(state) {
  switch (state) {
    case "0": return "#09A95E"; break;
    case "1": return "red"; break;
     default: return "#555555"; break;
  }
}

function contactColor(state) {
  switch (state) {
    case "0": return "#eeeeee"; break;
    case "1": return "#ffffff"; break;
     default: return "#aaaaaa"; break;
  }
}

function pirBackground(state) {
  switch (state) {
    case "0": return "#09999E"; break;
    case "1": return "#eedd22"; break;
     default: return "#555555"; break;
  }
}

function pirColor(state) {
  switch (state) {
    case "0": return "#ffffff"; break;
    case "1": return "#555555"; break;
     default: return "#aaaaaa"; break;
  }
}

function stateOnOff(state) {
  switch (state) {
    case "0": return "OFF"; break;
    case "1": return "ON"; break;
     default: return "-"; break;
  }
}

function stateOnOffBackground(state) {
  switch (state) {
    case "0": return "#555555"; break;
    case "1": return "#FAF39B"; break;
     default: return "#555555"; break;
  }
}

function stateOnOffColor(state) {
  switch (state) {
    case "0": return "#ffffff"; break;
    case "1": return "#000000"; break;
     default: return "#aaaaaa"; break;
  }
}

function onlineBackground(state) {
  switch (state) {
    case "0": return "#555555"; break;
    case "1": return "#3EAF3B"; break;
     default: return "#555555"; break;
  }
}

function onlineColor(state) {
  switch (state) {
    case "0": return "#aaaaaa"; break;
    case "1": return "#ffffff"; break;
     default: return "#aaaaaa"; break;
  }
}
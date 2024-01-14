const regionDropdown = document.querySelector('#region');

regionDropdown.addEventListener('select', dropdownChange);

//=== Option creator ===//
const socialClass = document.getElementById('socialclass');

function createOption(element,value,text){
  const opt = document.createElement("option");

  opt.value = value;
  opt.text = text;

  element.add(opt, null);
}
//=== Option deleter ===//


// functiont to unhidde elements that must stay hidden until active
function unhide(element){
  document.getElementById(element).style.display = 'block';
}

function dropdownChange() {
  console.log(regionDropdown.value);

//===Sacro Santo Imperio de Abel===//
if (regionDropdown.value == 'abel'){
  unhide('regiondiv');

  createOption(socialClass,'lowC','Clase Baja');
  createOption(socialClass,'medC','Clase Media');
  createOption(socialClass,'bourgeois','Burgués');
  createOption(socialClass,'nobility','Nobleza');
  createOption(socialClass,'special','Alta Nobleza');
  }

else if (regionDropdown.value == 'ilmora' || 'dalaborn'){
  unhide('regiondiv');
  
  createOption(socialClass,'lowC','Clase Baja');
  createOption(socialClass,'medC','Clase Media');
  createOption(socialClass,'nobility','Nobleza');
  createOption(socialClass,'special','Alta Nobleza');
    }

else if (regionDropdown.value == 'helenia'){
  unhide('regiondiv');
  
  createOption(socialClass,'lowC','Clase Baja');
  createOption(socialClass,'medC','Clase Media');
  createOption(socialClass,'nomad','Nómada');
  createOption(socialClass,'nobility','Nobleza');
    }

else if (regionDropdown.value == 'alberia' || 'galgados' || 'kanon'){
  unhide('regiondiv');
  
  createOption(socialClass,'lowC','Clase Baja');
  createOption(socialClass,'medC','Clase Media');
  createOption(socialClass,'nobility','Nobleza');
    }

else if (regionDropdown.value == 'arlan'){
  unhide('regiondiv');
  
  createOption(socialClass,'lowC','Clase Baja');
  createOption(socialClass,'medC','Clase Media');
  createOption(socialClass,'bourgeois','Burgués');
  createOption(socialClass,'special','Alta Burguesía');
    } 
}
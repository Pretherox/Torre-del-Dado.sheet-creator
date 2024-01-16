const regionDropdown = document.querySelector('#region');

regionDropdown.addEventListener('select', dropdownChange);

socialClass = document.getElementById('socialclass');

// functiont to unhidde elements that must stay hidden until active
function unhide(element){
  document.getElementById(element).style.display = 'block';
}
// this function registers at the console when a value has changed in a dropdown
function dropdownChange() {
  console.log(regionDropdown.value);

//===Sacro Santo Imperio de Abel===//
if (regionDropdown.value === 'abel'){
  unhide('regiondiv');

  socialClass.options[socialClass.value=0].text = 'Clase baja';
  socialClass.options[socialClass.value=1].text = 'Clase media';
  socialClass.options[socialClass.value=2].text = 'Burgués';
  socialClass.options[socialClass.value=3].text = 'Nobleza';
  socialClass.options[socialClass.value=4].text = 'Alta nobleza';
  }

else if(
  regionDropdown.value === 'ilmora' || 
  regionDropdown.value === 'dalaborn'){
  unhide('regiondiv');

  socialClass.options[socialClass.value=0].text = 'Clase baja';
  socialClass.options[socialClass.value=1].text = 'Clase media';
  socialClass.options[socialClass.value=2].text = 'Nobleza';
  socialClass.options[socialClass.value=3].text = 'Alta nobleza';
  socialClass.options[socialClass.value=4].text = '';
    }

else if(regionDropdown.value === 'helenia'){
  unhide('regiondiv');
  
  socialClass.options[socialClass.value=0].text = 'Clase baja';
  socialClass.options[socialClass.value=1].text = 'Clase media';
  socialClass.options[socialClass.value=2].text = 'Nómada';
  socialClass.options[socialClass.value=3].text = 'Nobleza';
  socialClass.options[socialClass.value=4].text = '';
    }

else if (
  regionDropdown.value === 'alberia' || 
  regionDropdown.value === 'galgados' ||  
  regionDropdown.value === 'kanon'){
  unhide('regiondiv');
  
  socialClass.options[socialClass.value=0].text = 'Clase baja';
  socialClass.options[socialClass.value=1].text = 'Clase media';
  socialClass.options[socialClass.value=2].text = 'Nobleza';
  socialClass.options[socialClass.value=3].text = '';
  socialClass.options[socialClass.value=4].text = '';
    }

else if (regionDropdown.value === 'arlan'){
  unhide('regiondiv');

  socialClass.options[socialClass.value=0].text = 'Clase baja';
  socialClass.options[socialClass.value=1].text = 'Clase media';
  socialClass.options[socialClass.value=2].text = 'Burgués';
  socialClass.options[socialClass.value=3].text = 'Alta Burguesía';
  socialClass.options[socialClass.value=4].text = '';
    }
//===La Alianza Azur===//
else if (regionDropdown.value === 'togarini'){
  unhide('regiondiv');

  socialClass.options[socialClass.value=0].text = 'Clase baja';
  socialClass.options[socialClass.value=1].text = 'Clase media';
  socialClass.options[socialClass.value=2].text = 'Burgués';
  socialClass.options[socialClass.value=3].text = 'Nobleza';
  socialClass.options[socialClass.value=4].text = 'Alta nobleza';
    }

else if (regionDropdown.value === 'remo'){
  unhide('regiondiv');
    
  socialClass.options[socialClass.value=0].text = 'Clase baja';
  socialClass.options[socialClass.value=1].text = 'Clase media';
  socialClass.options[socialClass.value=2].text = 'Burgués';
  socialClass.options[socialClass.value=3].text = 'Nobleza';
  socialClass.options[socialClass.value=4].text = '';
  }

else if (regionDropdown.value === 'bellafonte'){
  unhide('regiondiv');
      
  socialClass.options[socialClass.value=0].text = 'Clase baja';
  socialClass.options[socialClass.value=1].text = 'Clase media';
  socialClass.options[socialClass.value=2].text = 'Nobleza';
  socialClass.options[socialClass.value=3].text = '';
  socialClass.options[socialClass.value=4].text = '';
  }

//===Los Yermos Gélidos===//
else if (regionDropdown.value === 'goldar'){
  unhide('regiondiv');
  
  socialClass.options[socialClass.value=0].text = 'Norteño deshonrado o desterrado';
  socialClass.options[socialClass.value=1].text = 'Campesino';
  socialClass.options[socialClass.value=2].text = 'Norteño';
  socialClass.options[socialClass.value=3].text = 'Erling, Sklamo o Escaldo honorable';
  socialClass.options[socialClass.value=4].text = '';
  }
  
else if (regionDropdown.value === 'haufman'){
  unhide('regiondiv');
      
  socialClass.options[socialClass.value=0].text = 'Norteño pobre';
  socialClass.options[socialClass.value=1].text = 'Norteño';
  socialClass.options[socialClass.value=2].text = 'Saerinmir';
  socialClass.options[socialClass.value=3].text = 'Noble';
  socialClass.options[socialClass.value=4].text = '';
  }
  
else if (regionDropdown.value === 'hendell'){
  unhide('regiondiv');
        
  socialClass.options[socialClass.value=0].text = 'Campesino';
  socialClass.options[socialClass.value=1].text = 'Norteño';
  socialClass.options[socialClass.value=2].text = 'Lochgjest';
  socialClass.options[socialClass.value=3].text = 'Primera Casta';
  socialClass.options[socialClass.value=4].text = '';
  }

//===Las Tierras Oscuras===//
else if (regionDropdown.value === 'moth'){
  unhide('regiondiv');
    
  socialClass.options[socialClass.value=0].text = 'Clase baja';
  socialClass.options[socialClass.value=1].text = 'Clase media';
  socialClass.options[socialClass.value=2].text = 'Zigeuner';
  socialClass.options[socialClass.value=3].text = 'Noble';
  socialClass.options[socialClass.value=4].text = '';
  }
    
else if (regionDropdown.value === 'dwanholf'){
  unhide('regiondiv');
        
  socialClass.options[socialClass.value=0].text = 'Clase pobre';
  socialClass.options[socialClass.value=1].text = 'Clase media';
  socialClass.options[socialClass.value=2].text = 'Clase adinerada';
  socialClass.options[socialClass.value=3].text = '';
  socialClass.options[socialClass.value=4].text = '';
  }
    
//===La Costa Del Comercio===//
else if (regionDropdown.value === 'gabriel'){
  unhide('regiondiv');
          
  socialClass.options[socialClass.value=0].text = 'Indigente';
  socialClass.options[socialClass.value=1].text = 'Clase media';
  socialClass.options[socialClass.value=2].text = 'Burgués';
  socialClass.options[socialClass.value=3].text = 'Nobleza';
  socialClass.options[socialClass.value=4].text = 'Alta nobleza';
  }

else if (regionDropdown.value === 'phaion'){
  unhide('regiondiv');
    
  socialClass.options[socialClass.value=0].text = 'Clase baja';
  socialClass.options[socialClass.value=1].text = 'Clase media';
  socialClass.options[socialClass.value=2].text = 'Burgués';
  socialClass.options[socialClass.value=3].text = 'Nobleza';
  socialClass.options[socialClass.value=4].text = '';
  }
    
//===Los Estados Episcopales===//
else if (regionDropdown.value === 'dominio'){
  unhide('regiondiv');
        
  socialClass.options[socialClass.value=0].text = 'Clase baja';
  socialClass.options[socialClass.value=1].text = 'Clase media';
  socialClass.options[socialClass.value=2].text = 'Nobleza o sacerdote';
  socialClass.options[socialClass.value=3].text = 'Alta nobleza o alto clero';
  socialClass.options[socialClass.value=4].text = '';
  }
    
else if (regionDropdown.value === 'argos'){
  unhide('regiondiv');
          
  socialClass.options[socialClass.value=0].text = 'Clase baja';
  socialClass.options[socialClass.value=1].text = 'Clase media';
  socialClass.options[socialClass.value=2].text = 'Nobleza';
  socialClass.options[socialClass.value=3].text = '';
  socialClass.options[socialClass.value=4].text = '';
  }

//===Tierras De Al-Enneth===//
else if (regionDropdown.value === 'kushistan'){
  unhide('regiondiv');
    
  socialClass.options[socialClass.value=0].text = 'Clase baja';
  socialClass.options[socialClass.value=1].text = 'Clase media';
  socialClass.options[socialClass.value=2].text = 'Burgués';
  socialClass.options[socialClass.value=3].text = 'Nobleza';
  socialClass.options[socialClass.value=4].text = '';
  }
    
else if (regionDropdown.value === 'estigia'){
  unhide('regiondiv');

  socialClass.options[socialClass.value=0].text = 'Clase baja';
  socialClass.options[socialClass.value=1].text = 'Clase media';
  socialClass.options[socialClass.value=2].text = 'Burgués';
  socialClass.options[socialClass.value=3].text = 'Burócrata';
  socialClass.options[socialClass.value=4].text = 'Nobleza';
  }
    
else if (regionDropdown.value === 'salazar'){
  unhide('regiondiv');
          
  socialClass.options[socialClass.value=0].text = 'Nómada pobre';
  socialClass.options[socialClass.value=1].text = 'Nómada medio';
  socialClass.options[socialClass.value=2].text = 'Nómada rico';
  socialClass.options[socialClass.value=3].text = '';
  socialClass.options[socialClass.value=4].text = '';
  }

//===Estados Independientes===//
else if (regionDropdown.value === 'nanwe'){
  unhide('regiondiv');
    
  socialClass.options[socialClass.value=0].text = 'Indígena pobre';
  socialClass.options[socialClass.value=1].text = 'Indígena de clase media';
  socialClass.options[socialClass.value=2].text = 'Ciudadano de clase media';
  socialClass.options[socialClass.value=3].text = 'Burgués';
  socialClass.options[socialClass.value=4].text = '';
  }
    
else if (regionDropdown.value === 'lucrecio'){
  unhide('regiondiv');
        
  socialClass.options[socialClass.value=0].text = 'Clase baja';
  socialClass.options[socialClass.value=1].text = 'Clase media';
  socialClass.options[socialClass.value=2].text = 'Clase alta';
  socialClass.options[socialClass.value=3].text = 'Alta burguesía';
  socialClass.options[socialClass.value=4].text = '';
  }
    
else if (regionDropdown.value === 'kashmir'){
  unhide('regiondiv');
          
  socialClass.options[socialClass.value=0].text = 'Habitante de la sabana pobre';
  socialClass.options[socialClass.value=1].text = 'Habitante de la sabana medio';
  socialClass.options[socialClass.value=2].text = 'Habitante de la sabana rico';
  socialClass.options[socialClass.value=3].text = '';
  socialClass.options[socialClass.value=4].text = '';
  }

else if (regionDropdown.value === 'baho'){
  unhide('regiondiv');
    
  socialClass.options[socialClass.value=0].text = 'Sabio o guerrero pobre';
  socialClass.options[socialClass.value=1].text = 'Sabio o guerrero de clase media';
  socialClass.options[socialClass.value=2].text = 'Sabio o guerrero rico';
  socialClass.options[socialClass.value=3].text = '';
  socialClass.options[socialClass.value=4].text = '';
  }

//===Las Tierras Orientales===//
else if (regionDropdown.value === 'lannet'){
  unhide('regiondiv');
        
  socialClass.options[socialClass.value=0].text = 'Clase baja';
  socialClass.options[socialClass.value=1].text = 'Burgués';
  socialClass.options[socialClass.value=2].text = 'Samurái cortesano';
  socialClass.options[socialClass.value=3].text = 'Samurái guerrero';
  socialClass.options[socialClass.value=4].text = '';
  }
    
else if (regionDropdown.value === 'shivat'){
  unhide('regiondiv');
          
  socialClass.options[socialClass.value=0].text = 'Clase baja';
  socialClass.options[socialClass.value=1].text = 'Clase media';
  socialClass.options[socialClass.value=2].text = 'Burgués';
  socialClass.options[socialClass.value=3].text = 'Burócrata';
  socialClass.options[socialClass.value=4].text = 'Nobleza';
  }
}
function one(){
    window.alert("The Colosseum in Rome, Italy, is a large amphitheater that hosted events like gladiatorial games. Design Pics Inc. The Colosseum, also named the Flavian Amphitheater, is a large amphitheater in Rome. It was built during the reign of the Flavian emperors as a gift to the Roman people.")  
  }
  var images=[
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/0_Colosseum_-_Rome_111001_%282%29.JPG/220px-0_Colosseum_-_Rome_111001_%282%29.JPG",
      "https://cdn.britannica.com/02/179502-138-AE3BE74C/effects-construction-Rome-Colosseum.jpg?w=800&h=450&c=crop",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdeuepDQMNyZBT-LCCwx5ny_-1OqBkPWB1g&usqp=CAU",
      "https://img.theculturetrip.com/wp-content/uploads/2016/09/colosseum-header.jpg",
    ];
    var i = 0;
    function two() {
      if (i== 4) {
        i = 0
      }
      document.getElementById("abc").src = images[i];
      i++;
    }
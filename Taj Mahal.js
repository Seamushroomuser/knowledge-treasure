function one(){
    window.alert("An immense mausoleum of white marble, built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan in memory of his favourite wife, the Taj Mahal is the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage.")  
  }
  var images=[
      "https://www.hindikiduniya.com/wp-content/uploads/Tajmahal-1280x720.jpg",
      "https://theaugustboy.com/wp-content/uploads/2021/04/photo-1602579647012-44ba68534a12.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Taj_Mahal_N-UP-A28-a.jpg/800px-Taj_Mahal_N-UP-A28-a.jpg",
      "https://www.interestingarticlestoread.com/wp-content/uploads/2022/02/Short-Essay-On-Taj-Mahal.jpg",
    ];
    var i = 0;
    function two() {
      if (i== 4) {
        i = 0
      }
      document.getElementById("abc").src = images[i];
      i++;
    }
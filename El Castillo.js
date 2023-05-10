function one(){
  window.alert("El Castillo—in Spanish, “the castle”—looms at the center of Chichén Itzá, a 79-foot pyramid of stone. Also known as the Pyramid of Kukulkán, the structure embodies Mayan myth along with natural astronomical cycles. The phenomenon that El Castillo is famous for occurs twice each year, at the spring and fall equinoxes .")  
}
var images=[
    "https://www.designingbuildings.co.uk/w/images/e/eb/El-castillo-1039512_640.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSBbvyJXOwEbm9twVYs9vHUzTlHTsnMGJlmA&usqp=CAU",
    "https://i0.wp.com/www.sonicwonders.org/wp-content/uploads/2010/01/Chichen_Itza_03_2011_top_of_Kukulkan_Temple_El_Castillo_1404.jpg?fit=1200%2C900",
    "https://magicblueplanet.com/wp-content/uploads/2021/06/Chichen-Itza-Guide.jpeg",
  ];
  var i = 0;
  function two() {
    if (i== 4) {
      i = 0
    }
    document.getElementById("abc").src = images[i];
    i++;
  }
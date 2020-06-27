var tog = 0;

var x = document.querySelectorAll(".brands");

for(var i = 0 ; i< x.length; i++){
    x[i].addEventListener("mouseover", function(){
        document.querySelector(".car-brand").style.marginBottom = "220px";
    })
    x[i].addEventListener("mouseout", function(){
        document.querySelector(".car-brand").style.marginBottom = "0px";
    })   
}


function display(s){
    var x = document.querySelectorAll(".listings");
    for(var i = 0 ; i < x.length; i++){
        x[i].style.display = "none";
    }
//    if (s == 1){
//        document.querySelector(".mit-suv").classList.toggle("show");
//    }
 if (s == 1){
     document.querySelector(".mit-suv").style.display = "table";
     tog+=1
//     if (tog%2 !=1){
//         document.querySelector(".mit-suv").style.display = "none";
//     }
 }
 else if (s==2){
     document.querySelector(".mit-sedan").style.display = "table";
     tog+=1
//     if (tog%2 !=1){
//         document.querySelector(".mit-sedan").style.display = "none";
//     }
  }
 else if (s==3){
     document.querySelector(".mit-hatch").style.display = "table";
     tog+=1
//     if (tog%2 !=1){
//         document.querySelector(".mit-hatch").style.display = "none";
//     }
  }
 else if (s==4){
     document.querySelector(".toy-suv").style.display = "table";
     tog+=1
//     if (tog%2 !=1){
//         document.querySelector(".toy-suv").style.display = "none";
//     }
  }
 else if (s==5){
     document.querySelector(".toy-hatch").style.display = "table";
     tog+=1
//     if (tog%2 !=1){
//         document.querySelector(".toy-hatch").style.display = "none";
//     }
  }
 else if (s==6){
     document.querySelector(".toy-sedan").style.display = "table";
     tog+=1
//     if (tog%2 !=1){
//         document.querySelector(".toy-sedan").style.display = "none";
//     }
  }
 else if (s==7){
     document.querySelector(".hon-suv").style.display = "table";
     tog+=1
//     if (tog%2 !=1){
//         document.querySelector(".hon-suv").style.display = "none";
//     }
  }
 else if (s==8){
     document.querySelector(".hon-sedan").style.display = "table";
     tog+=1
//     if (tog%2 !=1){
//         document.querySelector(".hon-sedan").style.display = "none";
//     }
  }
 else if (s==9){
     document.querySelector(".hon-hatchback").style.display = "table";
     tog+=1
//     if (tog%2 !=1){
//         document.querySelector(".hon-hatchback").style.display = "none";
//     }
  }
 else if (s==10){
     document.querySelector(".maz-suv").style.display = "table";
     tog+=1
//     if (tog%2 !=1){
//         document.querySelector(".hon-hatchback").style.display = "none";
//     }
  }
 else if (s==11){
     document.querySelector(".maz-sedan").style.display = "table";
     tog+=1
//     if (tog%2 !=1){
//         document.querySelector(".hon-hatchback").style.display = "none";
//     }
  }
 else if (s==12){
     document.querySelector(".maz-hatchback").style.display = "table";
     tog+=1
//     if (tog%2 !=1){
//         document.querySelector(".hon-hatchback").style.display = "none";
//     }
  }
}

var y = document.querySelectorAll(".btn-avail-car");

for (var n = 0; n < y.length; n++){
    y[n].addEventListener("click", function(){
        alert("The Car is Added to the List!");
    });
}
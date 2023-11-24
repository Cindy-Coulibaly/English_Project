document.addEventListener("DOMContentLoaded",function(){
    let findPart = sessionStorage.getItem('findPart');
    class Parts
    {
        constructor(name,description,source)
        {
            this.name=name;
            this.description=description;
            this.source=source;
        }

    }

    let motor=new Parts("motor", "yap yap yap","../images/motor.jfif");
    let atomicAPack=new Parts("atomic a pack", "yes","../images/atomicAPack.jpg");
    let tools =new Parts("tools and aluminum sections'", "yes","../images/tools.jpg");
    let wiring=new Parts("low resistance wiring", "yes","../images/wiring.jpg");
    let power=new Parts("power supply", "yes","../images/power.jfif");
    let damage=new Parts("Damage equitment", "yes","../images/damage.jpg");

    let batteries=new Parts("batteries", "yes","../images/batteries.jpg");
    let motherboard=new Parts("motherboard", "yes","../images/motherboard.jpg");
    let optic=new Parts("optic", "yes","../images/optic.jfif");
    let controller=new Parts("controller", "yes","../images/controller.png");

    let arrayParts=[motor,atomicAPack,tools,wiring,power,damage,batteries,motherboard,optic,controller];

    document.getElementById("robot_message").innerHTML=`please find the ${findPart}`;

    // get all the image tags
    var imgs = document.getElementsByTagName("img");
    var imgSrcs = [];
    let temp=document.images;
    for (var i = 0; i < temp.length; i++) {
        imgSrcs.push(imgs[i].src);
    }

    for (var i = 0; i < temp.length; i++) {
        (function(index) {
             temp[index].addEventListener("click", function() {

                if(findPart!=temp[index].id)
                {
                    alert(`you have chosen ${temp[index].id} not the ${findPart} please try again`)
                }
                else
                {
                    window.location.href='../sub-pages/end.html';

                }
              })
        })(i);
     }
    

    
})
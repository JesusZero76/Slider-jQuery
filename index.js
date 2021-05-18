var indice=0;

    $(".paginacion li").eq(indice).css("background-color","black");

    $(".paginacion li").click(function(){
        indice=$(this).index();
        $(".paginacion li").css("background-color","gray");
        $(this).css("background-color","black");
        $(".slide").hide();
        $(".slide").eq(indice).fadeIn();
    });

    setInterval(function(){
        indice++;
        if(indice>2){
            indice=0;
        }
        $(".slide").hide();
        $(".slide").eq(indice).fadeIn();
        $(".paginacion li").css("background-color","gray");
        $(".paginacion li").eq(indice).css("background-color","black");
    },7000);

    $(".derecha").click(function(){
        indice++;
        if(indice>2){
            indice=0;
        }
        $(".slide").hide();
        $(".slide").eq(indice).fadeIn();
        $(".paginacion li").css("background-color","gray");
        $(".paginacion li").eq(indice).css("background-color","black");
    });

    $(".izquierda").click(function(){
        indice--;
        if(indice<0){
            indice=2;
        }
        $(".slide").hide();
        $(".slide").eq(indice).fadeIn();
        $(".paginacion li").css("background-color","gray");
        $(".paginacion li").eq(indice).css("background-color","black");
    });
$( function(){

    $("#mynav_toggle").click( function(){
        $(".mynav_right").slideToggle()
    })

    let items = document.querySelectorAll(".items")
    
    for(let i = 0; i <= items.length-1; i++){
        $($(".items")[i]).mouseover( function(){
            $($(".other_btns")[i]).addClass("other_btns_anim")
        })
        $($(".items")[i]).mouseout( function(){
            $($(".other_btns")[i]).removeClass("other_btns_anim")
        })
    }

});
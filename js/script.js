$( function(){

    // navigation toggle
    $("#mynav_toggle").click( function(){
        $(".mynav_right").slideToggle()
    })

    // items hover function
    let boxs = document.querySelectorAll(".boxs")
    
    for(let i = 0; i <= boxs.length-1; i++){
        $($(".boxs")[i]).mouseover( function(){
            $($(".other_btns")[i]).addClass("other_btns_anim")
        })
        $($(".boxs")[i]).mouseout( function(){
            $($(".other_btns")[i]).removeClass("other_btns_anim")
        })
    }

});
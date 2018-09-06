let mynav = () => 
{
    let x = document.getElementById("my-nav");
    // console.log(x)
    if (x.className === "navgtn" || x.className === "search")
    {
    	$(".navgtn").addClass("responsive");
        $(".navgtn").removeClass("navgtn");
        $(".search").addClass("responsive");
        $(".search").removeClass("search");
    }
    else
    {
    	$(".responsive").addClass("navgtn");
        $(".responsive").removeClass("responsive");
        $(".responsive").addClass("search");
        $(".responsive").removeClass("responsive");
    }
}
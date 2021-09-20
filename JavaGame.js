document.querySelector(".control-button span").onclick= function()
{
    let yourname= prompt("Enter Your Name ?");
    if(yourname == null || yourname == "")
    {
        document.querySelector(".name span").innerHTML = "UnKnown";

    }else
    {
        document.querySelector(".name span").innerHTML = yourname;
    }
    document.querySelector(".control-button ").remove();  
};

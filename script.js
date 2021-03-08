function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    t = document.getElementById("years").value;
    tim = parseFloat(t) + 2021;
    interest = (p * r * t)/100;

    if(p<=0){
        alert("Enter a positive value greater than zero.");
        document.getElementById("principal").focus();
        document.getElementById("principal").click();
        return null;
    }
    if(r<=0){
        alert("Enter a valid rate of interest.");
    }
    if(t<=0){
        alert("Enter time period greater zero.");
    }
    if(p>0 && r>0 && t>0){
        document.getElementById("result"). innerHTML = 
        "If you Deposit " + "<mark>"+ p + "</mark>" + "," 
        + "<br/>" + "at an interest rate of " + "<mark>"+ r +
        "%." + "</mark>" + 
        "<br/>" + "You will receive an interest of " + "<mark>" + interest + "</mark>" + "<br/>" + 
        "in the year " + "<mark>" + tim + "</mark>";
    }
    
}


        
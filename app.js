function calculate(){

    const computer = parseInt(document.getElementById("book01").value);
    const english = parseInt(document.getElementById("book02").value);
    const swedish = parseInt(document.getElementById("book03").value);
    const physics = parseInt(document.getElementById("book04").value);
    const math = parseInt(document.getElementById("book05").value);

    if(computer > 100 
    || english > 100
    || swedish > 100
    || physics > 100
    || math > 100)
    {
        alert("Please enter correct result!");
    }
    else
    {
        let obtain = computer + english + swedish + physics +math; // obtained number
        document.getElementById("obtain").innerHTML = obtain;
        let percentage = obtain / 500 * 100; // calculate percentage
        document.getElementById("percentage").innerHTML = percentage;
        // pass or fail
        if(computer > 40 
            && english > 40
            && swedish > 40
            && physics > 40
            && math > 40)
            {
                document.getElementById("remark").innerHTML = "<span style='color: green'>Pass</span>";
            }
            else{
                document.getElementById("remark").innerHTML = "<span style='color: red'>Fail</span>";
            }
            // validation for grade subject
            if(percentage >= 85){
                document.getElementById("grade").textContent = "A";
            }else if(percentage >= 75){
                document.getElementById("grade").textContent = "B";
            }
            else if(percentage >= 65){
                document.getElementById("grade").textContent = "C";
            }
            else if(percentage >= 55){
                document.getElementById("grade").textContent = "D";
            }
            else if(percentage >= 45){
                document.getElementById("grade").textContent = "E";
            }
            else{
                document.getElementById("grade").textContent = "F";
            }

    }
   

}
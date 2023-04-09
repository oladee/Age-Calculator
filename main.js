let button = document.getElementById("button");
button.addEventListener("click", () => {
    let ageYears = document.getElementById("ageYears")
    let ageMonths = document.getElementById("ageMonths")
    let ageDays = document.getElementById("ageDays");
    let finalDate = "";
    let day = document.getElementById("Day").value;
    let month = document.getElementById("Month").value;
    let years = document.getElementById("Year").value;
    let errorMsg1 = document.getElementById("errorMsg1");
    let errorMsg2 = document.getElementById("errorMsg2");
    let errorMsg3 = document.getElementById("errorMsg3");
    let dob = `${month}/${day}/${years}`
    let dateformat = /^(0?[1-9]|1[0-2])[\/](0?[1-9]|[1-2][0-9]|3[01])[\/]\d{4}$/;
    if(dob.match(dateformat)){
        dobArray = dob.split("/");
        let dobPart = []
        if(dobArray.length > 1){
            dobPart = dob.split("/");
        }
        let userMonth = parseInt(dobPart[0]);
        let userDay = parseInt(dobPart[1]);
        let userYear = parseInt(dobPart[2]);
        let ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        if((userMonth == 1) || (userMonth > 2)){
            if(userDay > ListofDays[userMonth - 1]){
                errorMsg1.innerText = "Must be a valid Day"
            }else{
                finalDate = `${userMonth}/${userDay}/${userYear}`
            }
        }else if(userMonth == 2){
            let leapYear = false
            if((!(userYear % 4) && userYear % 100) || userYear % 400){
                leapYear = true
            }
            if((leapYear === false) && (userDay >= 29)){
                errorMsg1.innerText = "Must be a valid Day";
            }
            else if((leapYear === true) && (userDay > 29)){
                errorMsg1.innerText = "Must be a valid Day";
            }
            else{
                finalDate = `${userMonth}/${userDay}/${userYear}`
            }
        }
        
        let dobDate = new Date(finalDate);
        let dobYear = dobDate.getFullYear();
        let dobMonth = dobDate.getMonth();
        let dobDay = dobDate.getDate();
        let now = new Date();
        let currentYear = now.getFullYear();
        let currentMonth = now.getMonth();
        let currentDay = now.getDate();
        let age = {};
        let monthAge;
        let dayAge;
        let ageString = "";
        yearAge = currentYear - dobYear;

        if(currentMonth >= dobMonth){
            monthAge = currentMonth - dobMonth
        }
        else{
            yearAge--;
            monthAge = 12 + currentMonth - dobMonth
        }
        if(currentDay >= dobDay){
            dayAge = currentDay - dobDay
        }else{
            monthAge--;
            dayAge = 31 + currentDay - dobDay;
            if(monthAge < 0){
                monthAge = 11
                yearAge--
            }
        }
        age = {
            finalYears: yearAge,
            finalMonth: monthAge,
            finalDays: dayAge
        }
        
        if((age.finalYears > 0)&& (age.finalMonth > 0) && (age.finalDays > 0)){
            ageYears.innerText = `${age.finalYears}`
            ageMonths.innerText =`${age.finalMonth}`        
            ageDays.innerText = `${age.finalDays}`
          
        }
        }else{
        errorMsg1.innerText = "Must be a valid day";
        errorMsg2.innerText = "Must be a valid Month"
        errorMsg3.innerText = "Must be a valid Year";
    }

})
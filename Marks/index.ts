
import * as promptSync from "prompt-sync" ;     
function subjects () {
   const prompt = promptSync ();    
    let marks = prompt ("enter your marks");
    let a = parseInt(marks);
    if (marks == 90) {
        return "Grade A";
    }else if (marks == 70) {
        return "Grade B";
    }else if (marks == 50) {
        return "Grade C";
    }else if (marks == 40) {
        return "Grade D"
    }else if (marks == 20) {
        return "Grade F";
    }else{
        return "Pass";
    }
    

    }
    let results= subjects();
    console.log(results);







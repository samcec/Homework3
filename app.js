var start = parseInt(prompt("Enter start: "));
var end = parseInt(prompt("Enter end: "));
var step = parseInt(prompt("Enter step: "));

    if(isNaN(start)==true||(isNaN(end)==true||isNaN(step)==true)){ //NaN check
        alert("Invalid integer input, reload and try again");
    }else if (step==0){
        alert("Invalid integer input, reload and try again");
    }else if (start > end && step > 0){
        alert("Invalid integer input, reload and try again");
    }else if (start < end && step < 0){
        alert("Invalid integer input, reload and try again");
    }

    else{
        var sum = 0;
        document.write("The generated array is: ");
        for(var i = start ; i<= end; i+=step){
            document.write(i+" ");
            sum += i;
        }
        for(var i = start ; i>= end; i+=step){
            document.write(i+" ");
            sum += i;
        }
        if(start < end){
            document.write("<br> The sum is: "+sum+"<br>");
            document.write("The binary absolute element values are: ");
            for(var i = start ; i<= end; i+=step){
                var num = Math.abs(i);
                document.write(num.toString(2)+" ");
            }
        }else{
            document.write("<br> The sum is: "+sum+"<br>");
            document.write("The binary absolute element values are: ");
            for(var i = start ; i>= end; i+=step){
                var num = Math.abs(i);
                document.write(num.toString(2)+" ");
            }
            
        }

    }
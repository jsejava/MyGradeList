    //  total function
    function total(){
        const gradA1 = "A1";
        const gradB2 = "B2";
        const gradB3 = "B3";
        const gradC4 = "C4";
        const gradC5 = "C5";
        const gradC6 = "C6";
        const gradD7 = "D7";
        const gradF9 = "F9";
        const intA1 = "Excellent";
        const intB2 = "Very Good";
        const intB3 = "Good";
        const intC4 = "Credit";
        const intC5 = "Credit";
        const intC6 = "Pass";
        const intD7 = "Pass";
        const intF9 = "Fail";
// condition 1
        const Score1 = parseInt(document.getElementById('Score1').value);
        const Subjet1 = document.querySelector("#Subjet1").value;
        if(Score1>=80 && Score1<=100){
        document.getElementById('BoxA1').value = Subjet1;
        document.getElementById('BoxA2').value = Score1 + "%";
        document.getElementById('BoxA3').value = gradA1;
        document.getElementById('BoxA4').value = intA1;   
        }
        else if(Score1>=70 && Score1<=79){
        document.getElementById('BoxA1').value = Subjet1;  
        document.getElementById('BoxA2').value = Score1 + "%";
        document.getElementById('BoxA3').value = gradB2;
        document.getElementById('BoxA4').value = intB2;
        }
        else if(Score1>=60 && Score1<=69){
        document.getElementById('BoxA1').value = Subjet1;
        document.getElementById('BoxA2').value = Score1 + "%";
        document.getElementById('BoxA3').value = gradB3;
        document.getElementById('BoxA4').Avalue = intB3;
        }
        else if(Score1>=55 && Score1<=59){
        document.getElementById('BoxA1').value = Subjet1;
        document.getElementById('BoxA2').value = Score1 + "%";
        document.getElementById('BoxA3').value = gradC4;
        document.getElementById('Box4').value = intC4;
        }
        else if(Score1>=50 && Score1<=54){
        document.getElementById('BoxA1').value = Subjet1;
        document.getElementById('BoxA2').value = Score1 + "%";
        document.getElementById('BoxA3').value = gradC5;
        document.getElementById('BoxA4').value = intC5;
        }
        else if(Score1>=45 && Score1<=49){
        document.getElementById('BoxA1').value = Subjet1;
        document.getElementById('BoxA2').value = Score1 + "%";
        document.getElementById('BoxA3').value = gradC6;
        document.getElementById('BoxA4').value = intC6;
        }
        else if(Score1>=40 && Score1<=44){
        document.getElementById('BoxA1').value = Subjet1;
        document.getElementById('BoxA2').value = Score1 + "%";
        document.getElementById('BoxA3').value = gradD7;
        document.getElementById('BoxA4').value = intD7;
        }
        else if(Score1>=39 && Score1<=35){
        document.getElementById('BoxA1').value = Subjet1;
        document.getElementById('BoxA2').value = Score1 + "%";
        document.getElementById('BoxA3').value = gradD8;
        document.getElementById('BoxA4').value = intD8;
        }
        else if(Score1<=39){
            document.getElementById('BoxA1').value = Subjet1;
            document.getElementById('BoxA2').value = Score1 + "%";
            document.getElementById('BoxA3').value = gradF9;
            document.getElementById('BoxA4').value = intF9;
        }
        
// condition 2   

        const Score2 = parseInt(document.getElementById('Score2').value);
        const Subjet2 = document.querySelector("#Subjet2").value;
        if(Score2>=80 && Score2<=100){
            document.getElementById('BoxB1').value = Subjet2 ;
            document.getElementById('BoxB2').value = Score2 + "%";
            document.getElementById('BoxB3').value = gradA1;
            document.getElementById('BoxB4').value = intA1;
        }
        else if(Score2>=70 && Score2<=79){
            document.getElementById('BoxB1').value = Subjet2 ;
            document.getElementById('BoxB2').value = Score2  + "%";
            document.getElementById('BoxB3').B2value =  gradB2;
            document.getElementById('BoxB4').vB3alue =  intB2;
        }
        else if(Score2>=60 && Score2<=69){
            document.getElementById('BoxB1').value = Subjet2;
            document.getElementById('BoxB2').value = Score2  + "%";
            document.getElementById('BoxB3').value = gradB3;
            document.getElementById('BoxB4').value = intB3;
        }
        else if(Score2>=55 && Score2<=59){
            
            document.getElementById('BoxB1').value = Subjet2;
            document.getElementById('BoxB2').value = Score2  + "%";
            document.getElementById('BoxB3').value = gradC4;
            document.getElementById('BoxB4').value = intC4;
        }
        else if(Score2>=50 && Score2<=54){
            
            document.getElementById('BoxB1').value = Subjet2;
            document.getElementById('BoxB2').value = Score2  + "%";
            document.getElementById('BoxB3').value = gradC5;
            document.getElementById('BoxB4').value = intC5;
        }
        else if(Score2>=45 && Score2<=49){
            
            document.getElementById('BoxB1').value = Subjet2;
            document.getElementById('BoxB2').value = Score2  + "%";
            document.getElementById('BoxB3').value = gradC6;
            document.getElementById('BoxB4').value = intC6;
        }
        else if(Score2>=40 && Score2<=44){
            
            document.getElementById('BoxB1').value = Subjet2;
             document.getElementById('BoxB2').value = Score2  + "%";
              document.getElementById('BoxB3').value = gradD7;
               document.getElementById('BoxB4').value = intD7;
        }
        else if(Score2>=35 && Score2<=39){
            
            document.getElementById('BoxB1').value = Subjet2;
             document.getElementById('BoxB2').value = Score2  + "%";
              document.getElementById('BoxB3').value = gradD8;
               document.getElementById('BoxB4').value = intD8;
        }
        else if(Score2<=34){
            
            document.getElementById('BoxB1').value = Subjet2;
             document.getElementById('BoxB2').value = Score2  + "%";
              document.getElementById('BoxB3').value = gradF9;
               document.getElementById('BoxB4').value = intF9;
        }

// condition 3
        const Score3 = parseInt(document.getElementById('Score3').value);
        const Subjet3 = document.querySelector("#Subjet3").value;

        if(Score3>=80 && Score3<=100){
            
            document.getElementById('BoxC1').value = Subjet3 ;
            document.getElementById('BoxC2').value = Score3 + "%";
            document.getElementById('BoxC3').value = gradA1;
            document.getElementById('BoxC4').value = intA1;
        }

        
        else if(Score3>=70 && Score3<=79){
            
            document.getElementById('BoxC1').value = Subjet3 ;
            document.getElementById('BoxC2').value = Score3  + "%";
            document.getElementById('BoxC3').value =  gradB2;
            document.getElementById('BoxC4').value =  intB2;
        }
        
        else if(Score3>=60 && Score3<=69){
            
            document.getElementById('BoxC1').value = Subjet3;
             document.getElementById('BoxC2').value = Score3  + "%";
              document.getElementById('BoxC3').value = gradB3;
               document.getElementById('BoxC4').value = intB3;
        }
        else if(Score3>=55 && Score3<=59){
            
            document.getElementById('BoxC1').value = Subjet3;
             document.getElementById('BoxC2').value = Score3  + "%";
              document.getElementById('BoxC3').value = gradC4;
               document.getElementById('BoxC4').value = intC4;
        }
        else if(Score3>=50 && Score3<=54){
            
            document.getElementById('BoxC1').value = Subjet3;
             document.getElementById('BoxC2').value = Score3  + "%";
              document.getElementById('BoxC3').value = gradC5;
               document.getElementById('BoxC4').value = intC5;
        }
        else if(Score3>=45 && Score3<=49){
            
            document.getElementById('BoxC1').value = Subjet3;
             document.getElementById('BoxC2').value = Score3  + "%";
              document.getElementById('BoxC3').value = gradC6;
               document.getElementById('BoxC4').value = intC6;
        }
        else if(Score3>=40 && Score3<=44){
            
            document.getElementById('BoxC1').value = Subjet3;
             document.getElementById('BoxC2').value = Score3  + "%";
              document.getElementById('BoxC3').value = gradD7;
               document.getElementById('BoxC4').value = intD7;
        }
        else if(Score3>=35 && Score3<=39){
            
            document.getElementById('BoxC1').value = Subjet3;
             document.getElementById('BoxC2').value = Score3  + "%";
              document.getElementById('BoxC3').value = gradD8;
               document.getElementById('BoxC4').value = intD8;
        }
        else if(Score3<=34){
            
            document.getElementById('BoxC1').value = Subjet3;
             document.getElementById('BoxC2').value = Score3  + "%";
              document.getElementById('BoxC3').value = gradF9;
               document.getElementById('BoxC4').value = intF9;
        }
        // condition 4
        const Score4 = parseInt(document.getElementById('Score4').value);
        const Subjet4 = document.querySelector("#Subjet4").value;

        if(Score4>=80 && Score4<=100){
            
            document.getElementById('BoxD1').value = Subjet4 ;
            document.getElementById('BoxD2').value = Score4 + "%";
            document.getElementById('BoxD3').value = gradA1;
            document.getElementById('BoxD4').value = intA1;
        }

        
        else if(Score4>=70 && Score4<=79){
            
            document.getElementById('BoxD1').value = Subjet4 ;
            document.getElementById('BoxD2').value = Score4  + "%";
            document.getElementById('BoxD3').B2value =  gradB2;
            document.getElementById('BoxD4').vB3alue =  intB2;
        }
        
        else if(Score4>=60 && Score4<=69){
            
            document.getElementById('BoxD1').value = Subjet4;
            document.getElementById('BoxD2').value = Score4  + "%";
            document.getElementById('BoxD3').value = gradB3;
            document.getElementById('BoxD4').value = intB3;
        }
        else if(Score4>=55 && Score4<=59){
            
            document.getElementById('BoxD1').value = Subjet4;
            document.getElementById('BoxD2').value = Score4  + "%";
            document.getElementById('BoxD3').value = gradC4;
            document.getElementById('BoxD4').value = intC4;
        }
        else if(Score4>=50 && Score4<=54){
            
            document.getElementById('BoxD1').value = Subjet4;
            document.getElementById('BoxD2').value = Score4  + "%";
            document.getElementById('BoxD3').value = gradC5;
            document.getElementById('BoxD4').value = intC5;
        }
        else if(Score4>=45 && Score4<=49){
            
            document.getElementById('BoxD1').value = Subjet4;
            document.getElementById('BoxD2').value = Score4  + "%";
            document.getElementById('BoxD3').value = gradC6;
            document.getElementById('BoxD4').value = intC6;
        }
        else if(Score4>=40 && Score4<=44){
            
            document.getElementById('BoxD1').value = Subjet4;
            document.getElementById('BoxD2').value = Score4  + "%";
            document.getElementById('BoxD3').value = gradD7;
            document.getElementById('BoxD4').value = intD7;
        }
        else if(Score4>=35 && Score4<=39){
            
            document.getElementById('BoxD1').value = Subjet4;
            document.getElementById('BoxD2').value = Score4  + "%";
            document.getElementById('BoxD3').value = gradD8;
            document.getElementById('BoxD4').value = intD8;
        }
        else if(Score4<=34){
            
            document.getElementById('BoxD1').value = Subjet4;
            document.getElementById('BoxD2').value = Score4  + "%";
            document.getElementById('BoxD3').value = gradF9;
            document.getElementById('BoxD4').value = intF9;
        }
// condition 5

        const Score5 = parseInt(document.getElementById('Score5').value);
        const Subjet5 = document.querySelector("#Subjet5").value;

        if(Score5>=80 && Score5<=100){
            
            document.getElementById('BoxE1').value = Subjet5 ;
            document.getElementById('BoxE2').value = Score5 + "%";
            document.getElementById('BoxE3').value = gradA1;
            document.getElementById('BoxE4').value = intA1;
        }

        
        else if(Score5>=70 && Score5<=79){
            
            document.getElementById('BoxE1').value = Subjet5 ;
            document.getElementById('BoxE2').value = Score5  + "%";
            document.getElementById('BoxE3').B2value =  gradB2;
            document.getElementById('BoxE4').vB3alue =  intB2;
        }
        
        else if(Score5>=60 && Score5<=69){
            
            document.getElementById('BoxE1').value = Subjet5;
            document.getElementById('BoxE2').value = Score5  + "%";
            document.getElementById('BoxE3').value = gradB3;
            document.getElementById('BoxE4').value = intB3;
        }
        else if(Score5>=55 && Score5<=59){
            
            document.getElementById('BoxE1').value = Subjet5;
            document.getElementById('BoxE2').value = Score5  + "%";
            document.getElementById('BoxE3').value = gradC4;
            document.getElementById('BoxE4').value = intC4;
        }
        else if(Score5>=50 && Score5<=54){
            
            document.getElementById('BoxE1').value = Subjet5;
            document.getElementById('BoxE2').value = Score5  + "%";
            document.getElementById('BoxE3').value = gradC5;
            document.getElementById('BoxE4').value = intC5;
        }
        else if(Score5>=45 && Score5<=49){
            
            document.getElementById('BoxE1').value = Subjet5;
            document.getElementById('BoxE2').value = Score5  + "%";
            document.getElementById('BoxE3').value = gradC6;
            document.getElementById('BoxE4').value = intC6;
        }
        else if(Score5>=40 && Score5<=44){
            
            document.getElementById('BoxE1').value = Subjet5;
            document.getElementById('BoxE2').value = Score5  + "%";
            document.getElementById('BoxE3').value = gradD7;
            document.getElementById('BoxE4').value = intD7;
        }
        else if(Score5>=35 && Score4<=39){
            
            document.getElementById('BoxE1').value = Subjet5;
            document.getElementById('BoxE2').value = Score5  + "%";
            document.getElementById('BoxE3').value = gradD8;
            document.getElementById('BoxE4').value = intD8;
        }
        else if(Score5<=34){
            
            document.getElementById('BoxE1').value = Subjet5;
            document.getElementById('BoxE2').value = Score5  + "%";
            document.getElementById('BoxE3').value = gradF9;
            document.getElementById('BoxE4').value = intF9;
        }
// condition 6
        const Score6 = parseInt(document.getElementById('Score6').value);
        const Subjet6 = document.querySelector("#Subjet6").value;

        if(Score6>=80 && Score6<=100){
            
            document.getElementById('BoxF1').value = Subjet6 ;
            document.getElementById('BoxF2').value = Score6 + "%";
            document.getElementById('BoxF3').value = gradA1;
            document.getElementById('BoxF4').value = intA1;
        }

        
        else if(Score6>=70 && Score6<=79){
            
            document.getElementById('BoxF1').value = Subjet6 ;
            document.getElementById('BoxF2').value = Score6  + "%";
            document.getElementById('BoxF3').value =  gradB2;
            document.getElementById('BoxF4').value =  intB2;
        }
        
        else if(Score6>=60 && Score6<=69){
            
            document.getElementById('BoxF1').value = Subjet6;
            document.getElementById('BoxF2').value = Score6  + "%";
            document.getElementById('BoxF3').value = gradB3;
            document.getElementById('BoxF4').value = intB3;
        }
        else if(Score6>=55 && Score6<=59){
            
            document.getElementById('BoxF1').value = Subjet6;
            document.getElementById('BoxF2').value = Score6  + "%";
            document.getElementById('BoxF3').value = gradC4;
            document.getElementById('BoxF4').value = intC4;
        }
        else if(Score6>=50 && Score6<=54){
            
            document.getElementById('BoxF1').value = Subjet6;
            document.getElementById('BoxF2').value = Score6  + "%";
            document.getElementById('BoxF3').value = gradC5;
            document.getElementById('BoxF4').value = intC5;
        }
        else if(Score6>=45 && Score6<=49){
    6
            document.getElementById('BoxF1').value = Subjet6;
            document.getElementById('BoxF2').value = Score6  + "%";
            document.getElementById('BoxF3').value = gradC6;
            document.getElementById('BoxF4').value = intC6;
        }
        else if(Score6>=40 && Score6<=44){
            
            document.getElementById('BoxF1').value = Subjet6;
            document.getElementById('BoxF2').value = Score6  + "%";
            document.getElementById('BoxF3').value = gradD7;
            document.getElementById('BoxF4').value = intD7;
        }
        else if(Score6>=35 && Score6<=39){
            
            document.getElementById('BoxF1').value = Subjet6;
            document.getElementById('BoxF2').value = Score6  + "%";
            document.getElementById('BoxF3').value = gradD8;
            document.getElementById('BoxF4').value = intD8;
        }
        else if(Score6<=34){
            
            document.getElementById('BoxF1').value = Subjet6;
            document.getElementById('BoxF2').value = Score6  + "%";
            document.getElementById('BoxF3').value = gradF9;
            document.getElementById('BoxF4').value = intF9;
        }
// condition 7
        const Score7 = parseInt(document.getElementById('Score7').value);
        const Subjet7 = document.querySelector("#Subjet7").value;

        if(Score7>=80 && Score7<=100){
            
            document.getElementById('BoxG1').value = Subjet7 ;
            document.getElementById('BoxG2').value = Score7 + "%";
            document.getElementById('BoxG3').value = gradA1;
            document.getElementById('BoxG4').value = intA1;
        }

        
        else if(Score7>=70 && Score7<=79){
            
            document.getElementById('BoxG1').value = Subjet7 ;
            document.getElementById('BoxG2').value = Score7  + "%";
            document.getElementById('BoxG3').B2value =  gradB2;
            document.getElementById('BoxG4').vB3alue =  intB2;
        }
        
        else if(Score7>=60 && Score7<=69){
            
            document.getElementById('BoxG1').value = Subjet7;
            document.getElementById('BoxG2').value = Score7  + "%";
            document.getElementById('BoxG3').value = gradB3;
            document.getElementById('BoxG4').value = intB3;
        }
        else if(Score7>=55 && Score7<=59){
            
            document.getElementById('BoxG1').value = Subjet7;
            document.getElementById('BoxG2').value = Score7  + "%";
            document.getElementById('BoxG3').value = gradC4;
            document.getElementById('BoxG4').value = intC4;
        }
        else if(Score7>=50 && Score7<=54){
            
            document.getElementById('BoxG1').value = Subjet7;
            document.getElementById('BoxG2').value = Score7  + "%";
            document.getElementById('BoxG3').value = gradC5;
            document.getElementById('BoxG4').value = intC5;
        }
        else if(Score7>=45 && Score7<=49){
            
            document.getElementById('BoxG1').value = Subjet7;
            document.getElementById('BoxG2').value = Score7  + "%";
            document.getElementById('BoxG3').value = gradC6;
            document.getElementById('BoxG4').value = intC6;
        }
        else if(Score7>=40 && Score7<=44){
            
            document.getElementById('BoxG1').value = Subjet7;
            document.getElementById('BoxG2').value = Score7  + "%";
            document.getElementById('BoxG3').value = gradD7;
            document.getElementById('BoxG4').value = intD7;
        }
        else if(Score7>=35 && Score7<=39){
            
            document.getElementById('BoxG1').value = Subjet7;
            document.getElementById('BoxG2').value = Score7  + "%";
            document.getElementById('BoxG3').value = gradD8;
            document.getElementById('BoxG4').value = intD8;
        }
        else if(Score7<=34){
            
            document.getElementById('BoxG1').value = Subjet7;
            document.getElementById('BoxG2').value = Score7  + "%";
            document.getElementById('BoxG3').value = gradF9;
            document.getElementById('BoxG4').value = intF9;
        }
        // condition 8

        const Score8 = parseInt(document.getElementById('Score8').value);
        const Subjet8 = document.querySelector("#Subjet8").value;

        if(Score8>=80 && Score8<=100){
            
            document.getElementById('BoxH1').value = Subjet8 ;
            document.getElementById('BoxH2').value = Score8 + "%";
            document.getElementById('BoxH3').value = gradA1;
            document.getElementById('BoxH4').value = intA1;
        }

        
        else if(Score8>=70 && Score8<=79){
            
            document.getElementById('BoxH1').value = Subjet8 ;
            document.getElementById('BoxH2').value = Score8  + "%";
            document.getElementById('BoxH3').B2value =  gradB2;
            document.getElementById('BoxH4').vB3alue =  intB2;
        }
        
        else if(Score8>=60 && Score8<=69){
            
            document.getElementById('BoxH1').value = Subjet8;
            document.getElementById('BoxH2').value = Score8  + "%";
            document.getElementById('BoxH3').value = gradB3;
            document.getElementById('BoxH4').value = intB3;
        }
        else if(Score8>=55 && Score8<=59){
            
            document.getElementById('BoxH1').value = Subjet8;
            document.getElementById('BoxH2').value = Score8  + "%";
            document.getElementById('BoxH3').value = gradC4;
            document.getElementById('BoxH4').value = intC4;
        }
        else if(Score8>=50 && Score8<=54){
            
            document.getElementById('BoxH1').value = Subjet8;
            document.getElementById('BoxH2').value = Score8 + "%";
            document.getElementById('BoxH3').value = gradC5;
            document.getElementById('BoxH4').value = intC5;
        }
        else if(Score8>=45 && Score8<=49){
            
            document.getElementById('BoxH1').value = Subjet8;
            document.getElementById('BoxH2').value = Score8  + "%";
            document.getElementById('BoxH3').value = gradC6;
            document.getElementById('BoxH4').value = intC6;
        }
        else if(Score8>=40 && Score8<=44){
            
            document.getElementById('BoxH1').value = Subjet8;
            document.getElementById('BoxH2').value = Score8  + "%";
            document.getElementById('BoxH3').value = gradD7;
            document.getElementById('BoxH4').value = intD7;
      }
        else if(Score8>=35 && Score8<=39){
            
            document.getElementById('BoxH1').value = Subjet8;
            document.getElementById('BoxH2').value = Score8  + "%";
            document.getElementById('BoxH3').value = gradD8;
            document.getElementById('BoxH4').value = intD8;
      }
        else if(Score8<=34){
            
            document.getElementById('BoxH1').value = Subjet8;
            document.getElementById('BoxH2').value = Score8  + "%";
            document.getElementById('BoxH3').value = gradF9;
            document.getElementById('BoxH4').value = intF9;
        
    }

    const name = document.getElementById('name').value;
        const ID = document.getElementById('ID').value;

        if(!name){
            
            UI.showAlert('Pls Enter A Name', 'info');
        }

        else if(!ID){
            UI.showAlert('Pls Enter an ID', 'info'); 
        }

        else if(Score1>100 || Score2>100 || Score3>100 || Score4>100 ||Score5>100 || 
            Score6>100 || Score7>100 || Score8>100){
            UI.showAlert('Scores Must Be Less Than 100% ','info');
        }
}

function InfoQuizzes(){
    UI.showAlert('Enter Your Subject Here', 'info');
    }
    function InfoAssignments(){
        UI.showAlert('Enter Your Scores Here', 'info');
    }
    function InfoMidsem(){
        UI.showAlert('Enter Your Subject Here', 'info');
    }
    function InfoExams(){
        UI.showAlert('Enter Your Scores Here', 'info');
    }
    
function display()
{
  localStorage.removeItem('names');
var list={
           value:{  q:"The use of the break statement in a switch statement is.",
                    o1:"optional",
                    o2:"compulsory",
                    o3:"to check an error",
                    o4:"None of the above",
                    ans:"optional"
              },
           rest:list={
               value: { q: "What is (void*)0?",
                        o1: "Representation of NULL pointer",
                        o2: "Representation of void pointer",
                        o3: "Error",
                        o4: "None of above",
                         ans:"Representation of NULL pointer"
                      },
           rest:list={
               value: { q:"char *p;  p = (char*) malloc(100);",
                        o1: "char p = *malloc(100);",
                        o2: "char *p = (char) malloc(100);",
                        o3: "char *p = (char*)malloc(100);",
                        o4: "char *p = (char*)(*malloc)(100);",
                       ans:"char *p = (char*)malloc(100);"
                    },
           rest:list
        }
       }

      };
localStorage.setItem("names", JSON.stringify(list));
alert("Your Question Reset...");
 document.getElementById("ques").value="";
  document.getElementById("op1").value="";
  document.getElementById("op2").value="";
  document.getElementById("op3").value="";
  document.getElementById("op4").value="";
}

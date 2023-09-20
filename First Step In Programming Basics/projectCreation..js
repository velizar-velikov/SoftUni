function projectsCreation(input){
    let name = input[0];
    let projectCount = Number(input[1]);
    let hoursNeeded  = projectCount * 3;
      
    
      console.log("The architect "+name+" will need "+hoursNeeded+" hours to complete "+projectCount+" project/s.");
      }
      projectsCreation("Velizar", [5])
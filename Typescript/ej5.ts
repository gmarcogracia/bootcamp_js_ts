const swap = (arg1:any, arg2:any) => {
      return [arg2, arg1];
    };
    
    let age: number, occupation: string;
    
    [occupation, age] = swap(39, "Placement officer");
    console.log("Occupation: ", occupation);
    console.log("Age: ", age);
    
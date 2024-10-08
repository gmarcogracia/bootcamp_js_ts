interface Students{
        name:string;
        age:number;
        occupation:string;
    
    }
    
    const students: Students[]= [
      {
        name: "Patrick Berry",
        age: 25,
        occupation: "Medical scientist",
      },
      {
        name: "Alice Garner",
        age: 34,
        occupation: "Media planner",
      },
    ];
    
    const logStudent = ({ name, age }: Students) => {
      console.log(`  - ${name}, ${age}`);
    };
    
    console.log("Students:");
    students.forEach(logStudent); 
    
    
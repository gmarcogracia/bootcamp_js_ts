interface Teacher { 

       name:string;
       age:number;
      subject: string;
    }
    interface Students{
        name:string;
        age:number
        occupation:string;
    
    }
    
    type User = Teacher | Students;
    const users: User[] = [
     {
        name: "Luke Patterson",
        age: 32,
        occupation: "Internal auditor",
      },
      {
        name: "Jane Doe",
        age: 41,
        subject: "English",
      },
      {
        name: "Alexandra Morton",
        age: 35,
        occupation: "Conservation worker",
      },
      {
        name: "Bruce Willis",
        age: 39,
        subject: "Biology",
      },
    ];
     function isStudent(user:Teacher | Students): user is Students{
      return (user as Students).occupation!==undefined
    
    }
    
    
    const logUser = (user: User) => {
      let extraInfo: string;
      if (isStudent(user)) {
        extraInfo = user.occupation;
      } else {
        extraInfo = user.subject;
      }
      console.log(`  - ${user.name}, ${user.age}, ${extraInfo}`);
    };
    
    users.forEach(logUser);
    

interface Teacher { 

       name:string;
       age:number;
      subject: string;
    }
    interface Students{
       
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
    const logUser = ({ name, age }: Teacher) => {
      console.log(`  - ${name}, ${age}`);
    };
    
    users.forEach(logUser);
    
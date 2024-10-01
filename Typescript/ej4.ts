interface Students{
        name:string;
        age:number;
        occupation:string;
    
    }
    
    const students: Students[] = [
      {
        name: "Luke Patterson",
       age: 32,
        occupation: "Internal auditor",
      },
      {
        name: "Emily Coleman",
        age: 25,
        occupation: "English",
      },
      {
        name: "Alexandra Morton",
        age: 35,
        occupation: "Conservation worker",
      },
      {
        name: "Bruce Willis",
        age: 39,
        occupation: "Placement officer",
      },
    ];
    type Criteria= Partial<Students>;
    const filterStudentsBy = (students: Students[], criteria: Criteria): Students[] => {
    return students.filter((student) => {
        const criteriaKeys = Object.keys(criteria) as (keyof Students)[];
        return criteriaKeys.every((key) => {
          return criteria[key] === student[key];
        });
      });
    };
    
    const logStudent = ({ name, occupation }: Students) => {
      console.log(`  - ${name}, ${occupation}`);
    };
    
    console.log("Students of age 35:");
    filterStudentsBy(students, { age: 35 }).forEach(logStudent);
    
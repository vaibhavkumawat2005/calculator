// Question - 1

function evaluateEmployee() {
    let name = prompt("Enter the employee's name");
    let role = prompt("Enter the employee's role");
    let experience = prompt("Enter the experience of the employee");
    let projectsCompleted = prompt(
      "Enter the amount of projects finished by the employee"
    );
    let rating;
  
    if (role === "Intern" || role === "Developer" || role === "Manager") {
      if (projectsCompleted < 2) {
        rating = 1;
      } else if (projectsCompleted <= 6) {
        rating = 3;
      } else {
        rating = 5;
      }
    } else {
      rating = 0;
    }
  
    // Categorize employee's performance based on rating and role
    let performanceCategory;
  
    if (rating < 3) {
      if (role === "Intern") {
        performanceCategory = "Underperforming Intern";
      } else if (role === "Developer" || role === "Manager") {
        performanceCategory = "Needs Improvement";
      }
    } else if (rating === 3 || rating === 4) {
      if (role === "Intern") {
        performanceCategory = "Average Intern";
      } else if (role === "Developer" || role === "Manager") {
        if (experience < 2) {
          performanceCategory = "Promising Newcomer";
        } else if (experience >= 2 && experience < 5) {
          performanceCategory = "Solid Performer";
        } else if (experience >= 5) {
          performanceCategory = "Experienced Professional";
        }
      }
    } else if (rating === 5) {
      if (role === "Intern") {
        performanceCategory = "Star Intern";
      } else if (role === "Developer" || role === "Manager") {
        if (projectsCompleted < 5) {
          performanceCategory = "Potential Star";
        } else if (projectsCompleted >= 5 && projectsCompleted <= 15) {
          performanceCategory = "Star Performer";
        } else if (projectsCompleted > 15) {
          performanceCategory = "Top Performer";
        }
      }
    }
  
    console.log(`${name} : ${performanceCategory}`);
  }
  
  // =/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/= //
  
  // Question - 2
  
  function classifyGrade() {
    let performance = prompt("Enter the Marks gained by the candidate");
  
    let grade;
  
    if (performance >= 90 && performance <= 100) {
      grade = "A+";
      console.log(grade);
    } else if (performance >= 80 && performance <= 89) {
      grade = "A";
      console.log(grade);
    } else if (performance >= 70 && performance <= 79) {
      grade = "B+";
      console.log(grade);
    } else if (performance >= 60 && performance <= 69) {
      grade = "B";
      console.log(grade);
    } else if (performance >= 50 && performance <= 59) {
      grade = "C+";
      console.log(grade);
    } else if (performance >= 40 && performance <= 49) {
      grade = "C";
      console.log(grade);
    } else if (performance >= 30 && performance <= 39) {
      grade = "D";
      console.log(grade);
    } else {
      grade = "F";
      console.log(grade);
    }
  }
  
  // =/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/= //
  
  // Question - 3
  
  function identifyCharType() {
    let char = prompt("Input the character you want to be identified.");
    let range;
  
    if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
      switch (char) {
        case "a":
        case "A":
        case "e":
        case "E":
        case "i":
        case "I":
        case "o":
        case "O":
        case "u":
        case "U":
          range = console.log("Vowel");
          return range;
  
        default:
          range = console.log("Consonant");
          return range;
      }
    } else if (char >= "0" && char <= "9") {
      range = console.log("Digit");
      return "Digit";
    } else {
      range = console.log("Special Character");
      return range;
    }
  }
  
  // =/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/= //
  
  // Question - 4
  
  function calculateBMI() {
    let weight = prompt("Enter the weight in KG.");
    let height = prompt("Enter the Height in Meters.");
  
    let BMI = weight / height ** 2;
    console.log(BMI);
  
    let bmiCategory;
  
    if (BMI <= 18.5) {
      bmiCategory = console.log("Underweight");
      return bmiCategory;
    } else if (BMI >= 18.5 && BMI <= 24.9) {
      bmiCategory = console.log("Normal Weight");
      return bmiCategory;
    } else if (BMI >= 25 && BMI <= 29.9) {
      bmiCategory = console.log("OverWeight");
      return bmiCategory;
    } else if (BMI >= 30) {
      bmiCategory = console.log("Obesity");
      return bmiCategory;
    }
  }
  
  // =/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/= //
  
  // Question - 5
  
  function classifyNumber() {
    let number = prompt("Enter the Digit You want Evaluated.");
    let result;
  
    if (number % 2 == 0 && number > 0) {
      result = console.log("The Number " + number + " is Positive & Even.");
      return result;
    } else if (number % 2 == 0 && number < 0) {
      result = console.log("The Number " + number + " is Negative & Even.");
      return result;
    } else if (number % 2 != 0 && number > 0) {
      result = console.log("The Number " + number + " is Positive & Odd. ");
      return result;
    } else if (number % 2 != 0 && number < 0) {
      result = console.log("The Number " + number + " is Negative & Odd.");
    }
  }
  
  // =/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/= //
  
  // Question - 6
  
  function calculateBill() {
    let units = prompt("Enter the Amount of Units Consumed");
    let GST, charges, FA;
  
    if (isNaN(units) || units <= 0) {
      alert("Invalid input: Please enter a proper Number.");
      return;
    }
  
    if (units <= 100) {
      charges = units * 0.5;
    } else if (units >= 101 && units <= 200) {
      charges = (units - 100) * 0.75 + 50;
    } else if (units >= 201 && units <= 400) {
      charges = (units - 200) * 1.2 + 50 + 75;
    } else if (units >= 401) {
      charges = (units - 400) * 1.5 + 50 + 75 + 240;
    }
  
    GST = charges * 0.2;
    console.log("Base Amount = " + charges + " & Additional tax = " + GST);
  
    FA = charges + GST;
    return console.log("Your final payable amount is : " + FA);
  }
  
  // =/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/= //
  
  // Question - 7
  
  function getGreeting() {
    let currentHour = prompt("Enter the Current Hour (0-24)");
  
    if (isNaN(currentHour) || currentHour <= 0 || currentHour >= 25) {
      alert("Invalid input: Please enter a proper Number.");
    }
  
    let greeting;
  
    if (currentHour >= 5 && currentHour <= 11) {
      greeting = console.log("Good Morning");
    } else if (currentHour >= 12 && currentHour <= 16) {
      greeting = console.log("Good Afternoon");
    } else if (currentHour >= 17 && currentHour <= 20) {
      greeting = console.log("Good Evening");
    } else if (currentHour >= 21 && currentHour <= 24) {
      greeting = console.log("Good Night");
    } else if (currentHour >= 0 && currentHour <= 4) {
      greeting = console.log("Good Night");
    }
  
    return greeting;
  }
  
  // =/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/= //
  
  // Question - 8
  
  function checkTriangle() {
    let sideA = prompt("Enter the Dimensions of Side A");
    let sideB = prompt("Enter the Dimensions of Side B");
    let sideC = prompt("Enter the Dimensions of Side C");
    let triangleType;
  
    if (sideA === sideB && sideA === sideC) {
      triangleType = console.log("Equilateral Triangle");
      return triangleType;
    } else if (sideA === sideB || sideA === sideC || sideB === sideC) {
      triangleType = console.log("Isosceles Triangle");
      return triangleType;
    } else {
      triangleType = console.log("Scalene Triangle");
      return triangleType;
    }
  }
  
  // =/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/= //
  
  // Question - 9
  
  function calculateGPA() {
    let grade = prompt("Enter the Grade (A, B, C, D, F))");
    let GPA;
  
    if (grade > "F") {
      alert("Please enter a proper Grade!");
    }
  
    switch (grade) {
      case "A":
        GPA = console.log("4.0");
        return GPA;
  
      case "B":
        GPA = console.log("3.0");
        return GPA;
  
      case "C":
        GPA = console.log("2.0");
        return GPA;
  
      case "D":
        GPA = console.log("1.0");
        return GPA;
  
      case "F":
        GPA = console.log("0.0");
        return GPA;
    }
  }
  
  // =/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/= //
  
  // Question - 10
  
  function getDayOfWeek() {
    let digit = prompt("Enter a Decimal from 0 to 6");
    let day;
  
    switch (digit) {
      case "0":
        day = console.log("Sunday");
        break;
  
      case "1":
        day = console.log("Monday");
        break;
  
      case "2":
        day = console.log("Tuesday");
        break;
  
      case "3":
        day = console.log("Wednesday");
        break;
  
      case "4":
        day = console.log("Thursday");
        break;
  
      case "5":
        day = console.log("Friday");
        break;
  
      case "6":
        day = console.log("Saturday");
        break;
  
      default:
        console.log("Please input a proper digit!");
    }
  }
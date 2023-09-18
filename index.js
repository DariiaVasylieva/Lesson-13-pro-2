class Student {
    constructor(name, surname, yearOfBirth, grades, presence) {
        this.name = name;
        this.surname = surname;
        this.yearOfBirth = yearOfBirth;
        this.grades = grades;
        this.presence = presence || [];
    }

    absent() {
        if (this.presence.length <= 24) {
            this.presence.push(false);
        } else {
            console.log(`Student presence can't be more than 25`);
        }
        return this;
    }

    present() {
        if (this.presence.length <= 24) {
            this.presence.push(true);
        } else {
            console.log(`Student presence can't be more than 25`);
        }
        return this;
    }

    getAge() {
        let year = new Date().getFullYear();
        return year - this.yearOfBirth;
    }

    getAverageGrade() {
        let averageGrade = 0;

        this.grades.forEach(grade => {
            averageGrade += grade;
        });
        return averageGrade / this.grades.length;
    }

    getAveragePresence() {
        let averagePresence = 0;

        this.presence.forEach(presence => {
            if (presence === true) {
                averagePresence++;
            }
        });

        return averagePresence / this.presence.length;
    }

    summary(averageGrade, averagePresence) {
        if (averageGrade > 90 && averagePresence > 0.9) {
            return `Well done!`;
        } else if (averageGrade > 90 || averagePresence > 0.9) {
            return `Good, but can be better!`;
        } else {
            return `Lazy ass!`;
        }
    }
}

let Lisa = new Student('Lisa', 'Ostrovskaya', 2005, [80, 90, 100, 100, 90, 100, 70]);

Lisa.present().present().present().absent().present().present().present().present().present().present().present().present().present().present().present();

let LisasAverageGrade = Lisa.getAverageGrade();
let LisasAveragePresence = Lisa.getAveragePresence();
let LisasSummary = Lisa.summary(LisasAverageGrade, LisasAveragePresence);

console.log(`Lisa's age is ${Lisa.getAge()}`);
console.log(`Lisa's average grade is : ${LisasAverageGrade}`);
console.log(`Lisa's average presence is : ${LisasAveragePresence}`);
console.log(`Lisa's summary is : ${LisasSummary}`);

let Pasha = new Student('Pasha', 'Plyuvan', 1998, [40, 30, 20, 90, 80, 60, 20]);

Pasha.present().present().absent().absent().absent().present();

let PashasAverageGrade = Pasha.getAverageGrade();
let PashasAveragePresence = Pasha.getAveragePresence();
let PashasSummary = Pasha.summary(PashasAverageGrade, PashasAveragePresence);

console.log(`Pasha's age is ${Pasha.getAge()}`);
console.log(`Pasha's average grade is : ${PashasAverageGrade}`);
console.log(`Pasha's average presence is : ${PashasAveragePresence}`);
console.log(`Pasha's summary is : ${PashasSummary}`);

let Angela = new Student('Angela', 'Melnichenko', 2002, [100, 100, 95, 90, 100, 100, 100]);

Angela.present().present();

let AngelasAverageGrade = Angela.getAverageGrade();
let AngelasAveragePresence = Angela.getAveragePresence();
let AngelaSummary = Angela.summary(AngelasAverageGrade, AngelasAveragePresence);

console.log(`Angela's age is ${Angela.getAge()}`);
console.log(`Angela's average grade is : ${AngelasAverageGrade}`);
console.log(`Angela's average presence is : ${AngelasAveragePresence}`);
console.log(`Angela's summary is : ${AngelaSummary}`);
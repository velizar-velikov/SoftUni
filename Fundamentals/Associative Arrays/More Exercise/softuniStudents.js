function softuniStudents(input) {
    let courses = {};

    for (let command of input) {
        if (command.includes(': ')) {
            let [course, capacity] = command.split(': ');
            if (courses.hasOwnProperty(course)) {
                courses[course]['capacity'] = Number(courses[course]['capacity']) + Number(capacity);
            } else {
                courses[course] = { capacity };
            }
        } else if (command.includes('with email')) {
            let pattern = /(?<username>user\d+)\[(?<credits>\d+)\] with email (?<email>user\d+@user\.com) joins (?<course>\w+.\w*)\b/g;
            let match = [...command.matchAll(pattern)];
            let { username, credits, email, course } = match[0].groups;

            if (course in courses) {
                if (courses[course].hasOwnProperty('students')) {
                    if (Number(Object.keys(courses[course]['students']).length) < Number(courses[course]['capacity'])) {
                        courses[course]['students'][username] = { email, credits };
                    }
                } else {
                    courses[course]['students'] = {};
                    courses[course]['students'][username] = { email, credits };
                }
            }
        }
    }

    let sortedCoursesEntries = Object.entries(courses).sort((a, b) => Object.keys(Object.entries(b[1])[1][1]).length - Object.keys(Object.entries(a[1])[1][1]).length);

    sortedCoursesEntries.forEach(([course, { capacity, students }]) => {
        let sortedStudentsEntries = Object.entries(students).sort((student1, student2) => Number(Object.entries(student2[1])[1][1]) - Number(Object.entries(student1[1])[1][1]));
        let placesLeft = Number(capacity) - sortedStudentsEntries.length;
        console.log(`${course}: ${placesLeft} places left`);
        sortedStudentsEntries.forEach(([username, { credits, email }]) => {
            console.log(`--- ${credits}: ${username}, ${email}`);
        })
    })
}

softuniStudents(['JavaBasics: 2', 'user1[25] with email user1@user.com joins C#Basics',
 'C#Advanced: 3', 'JSCore: 4', 'user2[30] with email user2@user.com joins C#Basics',
  'user13[50] with email user13@user.com joins JSCore', 'user1[25] with email user1@user.com joins JSCore',
   'user8[18] with email user8@user.com joins C#Advanced', 'user6[85] with email user6@user.com joins JSCore',
    'JSCore: 2', 'user11[3] with email user11@user.com joins JavaBasics',
     'user45[105] with email user45@user.com joins JSCore', 'user007[20] with email user007@user.com joins JSCore',
      'user700[29] with email user700@user.com joins JSCore', 'user900[88] with email user900@user.com joins JSCore'])

// softuniStudents(['JavaBasics: 15',
//     'user1[26] with email user1@user.com joins JavaBasics',
//     'user2[36] with email user11@user.com joins JavaBasics',
//     'JavaBasics: 5',
//     'C#Advanced: 5',
//     'user1[26] with email user1@user.com joins C#Advanced',
//     'user2[36] with email user11@user.com joins C#Advanced',
//     'user3[6] with email user3@user.com joins C#Advanced',
//     'C#Advanced: 1',
//     'JSCore: 8',
//     'user23[62] with email user23@user.com joins JSCore'])
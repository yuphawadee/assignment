"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupByDepartment = groupByDepartment;
function groupByDepartment(users) {
    const grouped = users.reduce((acc, user) => {
        const dept = user.company.department;
        if (!acc[dept]) {
            acc[dept] = {
                male: 0,
                female: 0,
                ageRange: "",
                hair: {},
                addressUser: {},
                ages: [],
            };
        }
        // เพศ
        if (user.gender === "male")
            acc[dept].male++;
        else if (user.gender === "female")
            acc[dept].female++;
        // สีผม
        const hairColor = user.hair.color;
        acc[dept].hair[hairColor] = (acc[dept].hair[hairColor] || 0) + 1;
        // เก็บอายุ
        acc[dept].ages.push(user.age);
        // ชื่อและรหัสไปรษณีย์
        const fullName = user.firstName + user.lastName;
        acc[dept].addressUser[fullName] = user.address.postalCode;
        return acc;
    }, {});
    // คำนวณช่วงอายุ
    for (const dept in grouped) {
        const ages = grouped[dept].ages;
        const minAge = Math.min(...ages);
        const maxAge = Math.max(...ages);
        grouped[dept].ageRange = `${minAge}-${maxAge}`;
        delete grouped[dept].ages;
    }
    return grouped;
}

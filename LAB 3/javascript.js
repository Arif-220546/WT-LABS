const courses = {
    frontend: {
        name: "Frontend Developer",
        fee: 12000,
        seats: 20,
        status: "Open",
        message: "Enroll now!"
    },
    fullstack: {
        name: "Full Stack Developer",
        fee: 15000,
        seats: 30,
        status: "Open",
        message: "Limited seats available"
    },
    datascientist: {
        name: "Data Scientist",
        fee: 17000,
        seats: 15,
        status: "Open",
        message: "High demand course"
    },
    ml: {
        name: "ML Engineer",
        fee: 28000,
        seats: 10,
        status: "Open",
        message: "Advanced level course"
    }
};

let currentCourseKey = "";


const courseSelect = document.getElementById("courseSelect");

courseSelect.innerHTML = `
    <option value="">Select Course</option>
    <option value="frontend">Frontend Developer</option>
    <option value="fullstack">Full Stack Developer</option>
    <option value="datascientist">Data Scientist</option>
    <option value="ml">ML Engineer</option>
`;

function showCourseStatus() {
    currentCourseKey = courseSelect.value;

    if (currentCourseKey === "") return;

    const course = courses[currentCourseKey];

    document.getElementById("courseName").innerText = course.name;
    document.getElementById("courseFee").innerText = course.fee;
    document.getElementById("seats").innerText = course.seats;
    document.getElementById("status").innerText = course.status;
    document.getElementById("message").innerText = course.message;

    console.log("Live Course Selected:", course);
}


function enrollStudent() {
    if (currentCourseKey === "") {
        alert("Please select a course first");
        return;
    }

    const course = courses[currentCourseKey];

    if (course.seats > 0) {
        course.seats--;

        if (course.seats === 0) {
            course.status = "Closed";
            
        }
    }

    document.getElementById("seats").innerText = course.seats;
    document.getElementById("status").innerText = course.status;

    console.log("After Enrollment:", course);
}















 
// Sidebar toggle
const menuBtn = document.getElementById("menu-btn")
const sidebar = document.getElementById("sidebar")

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active")
})
document.addEventListener("click", (e) => {
    if (!menuBtn.contains(e.target) &&
        !sidebar.contains(e.target)) {
        sidebar.classList.remove("active");
    }
})


//  Change Pages

const links = document.querySelectorAll(".nav-links li")
const pages = document.querySelectorAll(".page")

links.forEach(link => {

    link.addEventListener("click", () => {

        links.forEach(item => item.classList.remove("active"))
        link.classList.add("active")

        const pageId = link.getAttribute("data-page")

        pages.forEach(page => {
            page.classList.remove("active-page")
        })

        document.getElementById(pageId).classList.add("active-page")

    })

})


// Search Filter

const searchInput = document.getElementById("searchInput")
const tableRows = document.querySelectorAll("#bookingTable tr")

searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase()

    tableRows.forEach(row => {

        row.style.display = row.innerText.toLowerCase().includes(value)
            ? ""
            : "none"

    })

})


// Notification Dropdown

const notificationBtn = document.getElementById("notificationBtn")
const notificationDropdown = document.getElementById("notificationDropdown")

notificationBtn.addEventListener("click", () => {

    notificationDropdown.classList.toggle("active")

})


// Dark Mode

const themeToggle = document.getElementById("themeToggle")

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark")

})


// Counter Animation

const counters = document.querySelectorAll(".counter")

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target")
        const current = +counter.innerText

        const increment = target / 100

        if (current < target) {

            counter.innerText = `${Math.ceil(current + increment).toLocaleString()}`

            setTimeout(updateCounter, 50)

        } else {

            counter.innerText = target.toLocaleString()

        }

    }

    updateCounter()

})


// Line Chart

const lineCtx = document.getElementById("lineChart")

new Chart(lineCtx, {

    type: 'line',

    data: {

        labels: ['01 May', '05 May', '10 May', '15 May', '20 May', '25 May'],

        datasets: [{

            label: 'Revenue',

            data: [12000, 25000, 22000, 45000, 38000, 52000],

            borderColor: '#5b5cf0',

            backgroundColor: 'rgba(91,92,240,0.1)',

            tension: 0.4,

            fill: true,

            pointBackgroundColor: '#5b5cf0'

        }]

    },

    options: {

        responsive: true,

        plugins: {
            legend: {
                display: false
            }
        }

    }

})


// Doughnut Chart

const doughnutCtx = document.getElementById("doughnutChart")

new Chart(doughnutCtx, {

    type: 'doughnut',

    data: {

        labels: ['Cleaning', 'Plumbing', 'Electrical', 'Painting'],

        datasets: [{

            data: [4250, 3620, 3125, 2895],

            backgroundColor: [
                '#5b5cf0',
                '#22c55e',
                '#f59e0b',
                '#ef5da8'
            ]

        }]

    },

    options: {

        responsive: true,

        plugins: {
            legend: {
                position: 'bottom'
            }
        }

    }

})
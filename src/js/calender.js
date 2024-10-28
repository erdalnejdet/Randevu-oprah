document.addEventListener('DOMContentLoaded', () => {

    generateCalendar(new Date().getMonth(), new Date().getFullYear());
    generateTimeSlots();
});



function closeModal() {
    document.getElementById('randevuModal').style.display = 'none';
}

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
const today = new Date(); // Current date

function generateCalendar(month, year) {
    const calendarDays = document.getElementById('calendarDays');
    const currentMonthSpan = document.getElementById('currentMonth');

    const monthNames = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
    currentMonthSpan.textContent = `${monthNames[month]} ${year}`;

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let days = '';
    let dayCounter = 1;

    days += '<tr>';
    for (let i = 0; i < firstDay; i++) {
        days += '<td></td>';
    }

    for (let i = firstDay; i < 7; i++) {
        days += createDayCell(dayCounter);
        dayCounter++;
    }
    days += '</tr>';

    while (dayCounter <= daysInMonth) {
        days += '<tr>';
        for (let i = 0; i < 7; i++) {
            if (dayCounter <= daysInMonth) {
                days += createDayCell(dayCounter);
                dayCounter++;
            } else {
                days += '<td></td>';
            }
        }
        days += '</tr>';
    }

    calendarDays.innerHTML = days;
}

function createDayCell(day) {
    const cellDate = new Date(currentYear, currentMonth, day);
    // Disable cells for past dates
    const isPastDate = cellDate < today;

    return `<td onclick="selectDay(${day})" ${isPastDate ? 'class="disabled"' : ''}>${day}</td>`;
}

function changeMonth(direction) {
    if (direction === 1) {
        // Moving forward: Allow advancing to the next month if it is not the current month
        if (currentMonth < new Date().getMonth() + 1) {
            currentMonth++;
        }
    } else if (direction === -1) {
        // Moving backward: Allow going back to the current month only if already advanced
        if (currentMonth > new Date().getMonth()) {
            currentMonth--;
        }
    }

    // Handle year transition
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    } else if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }

    generateCalendar(currentMonth, currentYear);
}

function selectDay(day) {
    const days = document.querySelectorAll('#calendarDays td');
    days.forEach(d => d.classList.remove('selected'));
    event.target.classList.add('selected');
}

function generateTimeSlots() {
    const timeSlots = document.getElementById('timeSlots');
    const times = [
        '09:00', '10:00', '11:00', '12:00', '13:00',
        '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00',
    ];
    timeSlots.innerHTML = times.map(time => 
        `<button onclick="selectTime('${time}')">${time}</button>`
    ).join('');
}

function selectTime(time) {
    const slots = document.querySelectorAll('#timeSlots button');
    slots.forEach(slot => slot.classList.remove('selected'));
    event.target.classList.add('selected');
}

function confirmSelection() {
    const selectedDate = document.querySelector('#calendarDays td.selected');
    const selectedTime = document.querySelector('#timeSlots button.selected');
    const selectedType = document.querySelector('.type-btn.selected');

    if (selectedDate && selectedTime && selectedType) {
        const date = `${selectedDate.textContent} ${document.getElementById('currentMonth').textContent} ${currentYear}`;
        const time = selectedTime.textContent;
        const type = selectedType.textContent;
        alert(`Seçtiğiniz Randevu: ${date} ${time} - ${type}`);
    } else {
        alert('Lütfen bir tarih, saat ve görüşme tipi seçin.');
    }
}
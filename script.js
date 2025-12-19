// Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mainNav = document.getElementById('mainNav');
        
        mobileMenuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            mobileMenuBtn.innerHTML = mainNav.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
        
        // Exhibition data
        const exhibitions = [
            {
                id: 1,
                title: "Плановые экскурсии Николай Рерих",
                image: "https://s2.stc.all.kpcdn.net/putevoditel/projectid_534672/images/tild3032-3537-4231-a332-623236383830__rf.jpg",
                dates: "1.11.2025 – 5.04.2026 Плановые экскурсии – вт., ср., пт. – в 16:00; сб., вс. – в 12:00 и 16:00",
                author: "Куратор: ...",
                status: "active",
                description: "Редкие работы Малевича, Кандинского и других мастеров авангарда из частных коллекций."
            },
            {
                id: 2,
                title: "Выставка «Тициан, Брейгель, Джордано и другие»",
                image: "http://primgallery.com/app/uploads/2025/12/titsian_v-608x1080.jpg",
                dates: "19.12.25 – 23.02.2026 Кураторские экскурсии: ср. – 17:00",
                author: "Куратор: ...",
                status: "soon",
                description: "Более 200 работ современных фотографов, исследующих тему идентичности в цифровую эпоху."
            },
            {
                id: 3,
                title: "Выставка «Сокровища огненной живописи. 700 лет искусства лиможских эмалей» из цикла «Частные коллекции»",
                image: "http://primgallery.com/app/uploads/2025/12/h3ewg-ohvfj-1080x1080.jpeg",
                dates: " 07.11.2025 – 15.02.2026 Кураторские экскурсии: ср., пт. – 18:00",
                author: "Куратор: ...",
                status: "soon",
                description: "Уникальная коллекция икон и церковной утвари XII-XVII веков."
            },
            {
                id: 4,
                title: "Выставка Евгения Кудрявцева «Привет, Джон!»",
                image: "https://static.vl.ru/afisha/1762998560998_big",
                dates: "18.11.2025 – 01.02.2026 Экскурсии: вторник, четверг – 15:00. Кураторские: 3.12, 5.12 – в 13 часов. ",
                author: "Куратор: ...",
                status: "active",
                description: "Редкие работы Малевича, Кандинского и других мастеров авангарда из частных коллекций."
            },
            {
                id: 5,
                title: "Выставка «Сказка – ложь...» Печатная графика СССР 1960-90-х гг.»",
                image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                dates: "25.12.2025 – 08.02.2026 Экскурсии: вторник – 15:00. Кураторские: 27.12.2025, 08.01.2026, 09.01.2026 – в 12 часов; 15.01, 22.01, 29.01, 05.02, 07.02 – в 15.00. Финисаж – 07.02.2026",
                author: "Куратор: ...",
                status: "soon",
                description: "Редкие работы Малевича, Кандинского и других мастеров авангарда из частных коллекций."
            },
        ];
        
        // Events data
        const events = [
            {
                id: 1,
                title: "Лекции",
                image: "/images/lec.jpg",
                date: "25.10.2023, 18:00",
                type: "Лекции",
                description: "..."
            },
            {
                id: 2,
                title: "Семейные выходные",
                image: "/images/семейные выходные.jpg",
                date: "02.11.2023, 16:00",
                type: "Семейные выходные",
                description: "."
            },
            {
                id: 3,
                title: "Детские программы",
                image: "/images/детпрог.jpg",
                date: "02.11.2023, 16:00",
                type: "Семейные выходные",
                description: "."
            },
        ];
        
         // Ticket prices
        const ticketPrices = {
            full: 500,
            student: 300,
            pensioner: 250,
            child: 200
        };
        
        // Render exhibitions
        function renderExhibitions() {
            const exhibitionsGrid = document.getElementById('exhibitionsGrid');
            exhibitionsGrid.innerHTML = '';
            
            exhibitions.forEach(exhibition => {
                const exhibitionCard = document.createElement('div');
                exhibitionCard.className = 'exhibition-card';
                exhibitionCard.innerHTML = `
                    <div class="card-image">
                        <img src="${exhibition.image}" alt="${exhibition.title}">
                    </div>
                    <div class="card-content">
                        <h3>${exhibition.title}</h3>
                        <div class="card-meta">
                            <span><i class="far fa-calendar-alt"></i> ${exhibition.dates}</span>
                            <span><i class="fas fa-user"></i> ${exhibition.author}</span>
                        </div>
                        <p>${exhibition.description}</p>
                        <div class="status ${exhibition.status}">
                            ${exhibition.status === 'active' ? 'Идет сейчас' : 
                              exhibition.status === 'soon' ? 'Скоро открытие' : 'Завершена'}
                        </div>
                    </div>
                `;
                exhibitionsGrid.appendChild(exhibitionCard);
            });
        }
        
        // Render events
        function renderEvents() {
            const eventsGrid = document.getElementById('eventsGrid');
            eventsGrid.innerHTML = '';
            
            events.forEach(event => {
                const eventCard = document.createElement('div');
                eventCard.className = 'event-card';
                eventCard.innerHTML = `
                    <div class="card-image">
                        <img src="${event.image}" alt="${event.title}">
                    </div>
                    <div class="card-content">
                        <h3>${event.title}</h3>
                        <div class="card-meta">
                            <span><i class="far fa-calendar-alt"></i> ${event.date}</span>
                            <span><i class="fas fa-tag"></i> ${event.type}</span>
                        </div>
                        <p>${event.description}</p>
                    </div>
                `;
                eventsGrid.appendChild(eventCard);
            });
        }
        
        // Populate exhibition and event dropdowns
        function populateDropdowns() {
            const exhibitionSelect = document.getElementById('exhibition');
            const eventSelect = document.getElementById('event');
            
            // Clear existing options except first
            while (exhibitionSelect.options.length > 1) {
                exhibitionSelect.remove(1);
            }
            
            while (eventSelect.options.length > 1) {
                eventSelect.remove(1);
            }
            
            // Add exhibitions to dropdown
            exhibitions.forEach(exhibition => {
                const option = document.createElement('option');
                option.value = exhibition.id;
                option.textContent = exhibition.title;
                exhibitionSelect.appendChild(option);
            });
            
            // Add events to dropdown
            events.forEach(event => {
                const option = document.createElement('option');
                option.value = event.id;
                option.textContent = `${event.title} (${event.date})`;
                eventSelect.appendChild(option);
            });
        }
        
        // Calculate total price
        function calculateTotal() {
            const ticketCount = parseInt(document.getElementById('ticketCount').value) || 1;
            const discountType = document.getElementById('discount').value;
            const pricePerTicket = ticketPrices[discountType];
            const total = ticketCount * pricePerTicket;
            
            document.getElementById('totalPrice').textContent = `Итого: ${total} руб.`;
        }
        
        // Form submission
        function handleFormSubmit(e) {
            e.preventDefault();
            
            // Get form values
            const exhibitionId = document.getElementById('exhibition').value;
            const eventId = document.getElementById('event').value;
            const date = document.getElementById('date').value;
            const ticketCount = document.getElementById('ticketCount').value;
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const discountType = document.getElementById('discount').value;
            
            // Validate required fields
            if (!exhibitionId || !date || !name || !email || !phone) {
                alert('Пожалуйста, заполните все обязательные поля.');
                return;
            }
            
            // In a real application, this would submit to a server
            // For demo, we'll show a success message
            const selectedExhibition = exhibitions.find(e => e.id == exhibitionId);
            const selectedEvent = eventId ? events.find(e => e.id == eventId) : null;
            const totalPrice = ticketCount * ticketPrices[discountType];
            
            // Format date
            const formattedDate = new Date(date).toLocaleDateString('ru-RU', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            });
            
            // Success message
            alert(`Билеты успешно оформлены!\n\nДетали заказа:\n- Выставка: ${selectedExhibition.title}\n${selectedEvent ? `- Мероприятие: ${selectedEvent.title}\n` : ''}- Дата посещения: ${formattedDate}\n- Количество билетов: ${ticketCount}\n- Тип билета: ${document.getElementById('discount').options[document.getElementById('discount').selectedIndex].text}\n- Общая стоимость: ${totalPrice} руб.\n\nСейчас вы будете перенаправлены на страницу оплаты, где можно выбрать оплату Пушкинской картой.`);
            
            // Reset form
            document.getElementById('ticketForm').reset();
            calculateTotal();
        }
        
        // Initialize date picker with tomorrow as minimum date
        function initDatePicker() {
            const dateInput = document.getElementById('date');
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            
            // Format to YYYY-MM-DD
            const year = tomorrow.getFullYear();
            const month = String(tomorrow.getMonth() + 1).padStart(2, '0');
            const day = String(tomorrow.getDate()).padStart(2, '0');
            
            dateInput.min = `${year}-${month}-${day}`;
            dateInput.value = `${year}-${month}-${day}`;
        }
        
        // Initialize the page
        document.addEventListener('DOMContentLoaded', () => {
            renderExhibitions();
            renderEvents();
            populateDropdowns();
            initDatePicker();
            calculateTotal();
            
            // Add event listeners for dynamic price calculation
            document.getElementById('ticketCount').addEventListener('input', calculateTotal);
            document.getElementById('discount').addEventListener('change', calculateTotal);
            
            // Form submission
            document.getElementById('ticketForm').addEventListener('submit', handleFormSubmit);
            
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        e.preventDefault();
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });
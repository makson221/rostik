// ===================== Дані сутностей =====================

// Сутність 1: Лікар
const doctors = [
  { id: 1, fullName: 'Коваленко Олег Петрович',      specialty: 'Кардіолог', department: 'Кардіологічне', category: 'Вища',  experience: 18, office: '204', phone: '+380 67 123 45 67', salary: 32000 },
  { id: 2, fullName: 'Шевченко Ірина Василівна',     specialty: 'Невролог',  department: 'Неврологічне',  category: 'Перша', experience: 11, office: '310', phone: '+380 50 234 56 78', salary: 27500 },
  { id: 3, fullName: 'Бондаренко Андрій Миколайович', specialty: 'Хірург',    department: 'Хірургічне',    category: 'Вища',  experience: 22, office: '115', phone: '+380 93 345 67 89', salary: 35000 },
  { id: 4, fullName: 'Ткаченко Марія Олегівна',      specialty: 'Педіатр',   department: 'Педіатричне',   category: 'Друга', experience: 5,  office: '021', phone: '+380 66 456 78 90', salary: 22000 },
  { id: 5, fullName: 'Мельник Сергій Іванович',      specialty: 'Терапевт',  department: 'Терапевтичне',  category: 'Перша', experience: 9,  office: '102', phone: '+380 97 567 89 01', salary: 25000 }
];

// Сутність 2: Пацієнт
const patients = [
  { card: 'P-1001', fullName: 'Литвиненко Петро Андрійович',   birthDate: '12.03.1958', gender: 'Ч', address: 'м. Київ, вул. Хрещатик, 10',          phone: '+380 67 111 22 33', diagnosis: 'Гіпертонічна хвороба', doctor: 'Коваленко О. П.',  admissionDate: '28.10.2026', ward: 21 },
  { card: 'P-1002', fullName: 'Кравченко Олена Сергіївна',     birthDate: '05.07.1985', gender: 'Ж', address: 'м. Київ, вул. Січових Стрільців, 45', phone: '+380 50 222 33 44', diagnosis: 'Мігрень',              doctor: 'Шевченко І. В.',   admissionDate: '01.11.2026', ward: 34 },
  { card: 'P-1003', fullName: 'Савченко Дмитро Олександрович', birthDate: '19.11.1990', gender: 'Ч', address: 'м. Бровари, вул. Київська, 7',        phone: '+380 93 333 44 55', diagnosis: 'Гострий апендицит',    doctor: 'Бондаренко А. М.', admissionDate: '03.11.2026', ward: 12 },
  { card: 'P-1004', fullName: 'Олійник Софія Максимівна',      birthDate: '22.04.2019', gender: 'Ж', address: 'м. Київ, просп. Перемоги, 88',        phone: '+380 66 444 55 66', diagnosis: 'Бронхіт',              doctor: 'Ткаченко М. О.',   admissionDate: '30.10.2026', ward: 5 },
  { card: 'P-1005', fullName: 'Поліщук Василь Григорович',     birthDate: '08.09.1972', gender: 'Ч', address: 'м. Ірпінь, вул. Соборна, 15',         phone: '+380 97 555 66 77', diagnosis: 'Пневмонія',            doctor: 'Мельник С. І.',    admissionDate: '02.11.2026', ward: 8 }
];

// Сутність 3: Відділення
const departments = [
  { code: 'KRD', name: 'Кардіологічне', head: 'Коваленко О. П.',  floor: 2, beds: 40, freeBeds: 6, doctorsCount: 8,  hours: '08:00 – 18:00', phone: '201' },
  { code: 'NRV', name: 'Неврологічне',  head: 'Шевченко І. В.',   floor: 3, beds: 35, freeBeds: 4, doctorsCount: 6,  hours: '08:00 – 17:00', phone: '301' },
  { code: 'HRG', name: 'Хірургічне',    head: 'Бондаренко А. М.', floor: 1, beds: 50, freeBeds: 9, doctorsCount: 12, hours: 'цілодобово',    phone: '101' },
  { code: 'PED', name: 'Педіатричне',   head: 'Ткаченко М. О.',   floor: 0, beds: 30, freeBeds: 7, doctorsCount: 5,  hours: '08:00 – 20:00', phone: '001' },
  { code: 'TRP', name: 'Терапевтичне',  head: 'Мельник С. І.',    floor: 1, beds: 45, freeBeds: 3, doctorsCount: 10, hours: '08:00 – 19:00', phone: '102' }
];

// ===================== Опис колонок =====================
// key — назва поля в об'єкті, title — заголовок колонки, num — числова колонка (вирівнювання праворуч)

const doctorColumns = [
  { key: 'id',         title: '№' },
  { key: 'fullName',   title: 'ПІБ' },
  { key: 'specialty',  title: 'Спеціалізація' },
  { key: 'department', title: 'Відділення' },
  { key: 'category',   title: 'Категорія' },
  { key: 'experience', title: 'Стаж (років)', num: true },
  { key: 'office',     title: 'Кабінет' },
  { key: 'phone',      title: 'Телефон' },
  { key: 'salary',     title: 'Ставка (грн)', num: true, format: formatMoney }
];

const patientColumns = [
  { key: 'card',          title: '№ картки' },
  { key: 'fullName',      title: 'ПІБ' },
  { key: 'birthDate',     title: 'Дата народження' },
  { key: 'gender',        title: 'Стать' },
  { key: 'address',       title: 'Адреса' },
  { key: 'phone',         title: 'Телефон' },
  { key: 'diagnosis',     title: 'Діагноз' },
  { key: 'doctor',        title: 'Лікуючий лікар' },
  { key: 'admissionDate', title: 'Дата госпіталізації' },
  { key: 'ward',          title: 'Палата' }
];

const departmentColumns = [
  { key: 'code',         title: 'Код' },
  { key: 'name',         title: 'Назва' },
  { key: 'head',         title: 'Завідувач' },
  { key: 'floor',        title: 'Поверх', num: true },
  { key: 'beds',         title: 'Кількість ліжок', num: true },
  { key: 'freeBeds',     title: 'Вільних ліжок', num: true },
  { key: 'doctorsCount', title: 'Кількість лікарів', num: true },
  { key: 'hours',        title: 'Години прийому' },
  { key: 'phone',        title: 'Внутрішній телефон' }
];

// ===================== Функції =====================

// 32000 -> "32 000"
function formatMoney(value) {
  return value.toLocaleString('uk-UA');
}

// Будує таблицю: заголовок із columns, рядки з масиву data
function renderTable(tableId, columns, data) {
  const table = document.getElementById(tableId);
  table.innerHTML = '';

  // Заголовок
  const thead = document.createElement('thead');
  const headRow = document.createElement('tr');
  columns.forEach(function (col) {
    const th = document.createElement('th');
    th.textContent = col.title;
    headRow.appendChild(th);
  });
  thead.appendChild(headRow);
  table.appendChild(thead);

  // Рядки з даними
  const tbody = document.createElement('tbody');
  data.forEach(function (item) {
    const tr = document.createElement('tr');
    columns.forEach(function (col) {
      const td = document.createElement('td');
      const value = item[col.key];
      td.textContent = col.format ? col.format(value) : value;
      if (col.num) td.className = 'num';
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
}

// Перемикання табів: показуємо лише таблицю обраної сутності
function initTabs() {
  const tabs = document.querySelectorAll('.tab');
  const panels = document.querySelectorAll('.tab-panel');

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      panels.forEach(function (p) { p.classList.remove('active'); });

      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      document.getElementById(tab.dataset.tab).classList.add('active');
    });
  });
}

// ===================== Запуск =====================

renderTable('doctors-table', doctorColumns, doctors);
renderTable('patients-table', patientColumns, patients);
renderTable('departments-table', departmentColumns, departments);
initTabs();

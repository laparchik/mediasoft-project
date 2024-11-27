document.getElementById("openModal").onclick = function() { //привязка обработчика события onclick к элементу с идентификатором openModal
    document.getElementById("modal").style.display = "block"; //Когда этот элемент нажимается, модальное окно с идентификатором modal становится видимым
}

document.querySelector(".close-button").onclick = function() { //Этот код связывает обработчик события onclick с кнопкой закрытия (которая имеет класс close-button).
    document.getElementById("modal").style.display = "none"; // Когда на неё нажимают, модальное окно скрывается, устанавливая его стиль на display: none.
}

document.getElementById("contactForm").onsubmit = function(event) { //В этом блоке кода обработчик события onsubmit прикрепляется к форме с идентификатором contactForm. Когда форма отправляется:
    event.preventDefault(); // - event.preventDefault(); предотвращает стандартное событие отправки формы (перезагрузка страницы).

    const logo = document.getElementById("logo").value;
    const name = document.getElementById("name").value; //Значения из полей ввода logo, name и phone извлекаются и сохраняются в соответствующие переменные.
    const phone = document.getElementById("phone").value;

    addContact(logo, name, phone);
    document.getElementById("modal").style.display = "none"; //Функция addContact(logo, name, phone) вызывается для обработки данных (например, она может добавлять контакт в базу данных или массив). Затем модальное окно закрывается, и форма сбрасывается, очищая все поля.
    this.reset();
}

function addContact(logo, name, phone) {//Функция addContact*: - Эта функция принимает три параметра: logo (URL изображения логотипа), name (имя контакта) и phone (номер телефона контакта).
    const contactsContainer = document.getElementById("contactsContainer"); //Получение контейнера для контактов*: - const contactsContainer = document.getElementById("contactsContainer"); - здесь происходит поиск элемента с ID contactsContainer, который будет служить контейнером для всех контактов. 

    const contactBlock = document.createElement("div"); //Создание блока контакта*:-- создается новый элемент div, который будет представлять отдельный контакт.
    contactBlock.className = "contact-block"; //задается класс contact-block для стилей этого блока.

    const logoImg = document.createElement("img"); //Создание изображения логотипа*:- Создается элемент img для логотипа:
    logoImg.src = logo;
    logoImg.alt = "Логотип";
    logoImg.style.width = "50px";
    logoImg.style.height = "50px";

    const nameDiv = document.createElement("div"); // Создание блока с именем*:  Создается новый div, содержащий имя:
    nameDiv.innerText = `Name: ${name}`;

    const phoneDiv = document.createElement("div"); //Создание блока с телефоном  Аналогично создается блок для номера телефона:
    phoneDiv.innerText = `Phone: ${phone}`;

    const favoriteCheckbox = document.createElement("input"); //Создание чекбокса "Избранное
    favoriteCheckbox.type = "checkbox"; //Создается элемент input типа checkbox, который может использоваться для отметки контакта как избранного:
    favoriteCheckbox.className = "favorite-checkbox";

    const deleteButton = document.createElement("button"); //Здесь создается новая кнопка с помощью метода document.createElement(). Эта кнопка будет использоваться для удаления блока контакта.
    deleteButton.innerText = "✖️"; // Крестик
    deleteButton.style.fontSize = "16px"; // Установка размера шрифта
    deleteButton.style.border = "none"; // Удаление границы
    deleteButton.style.background = "none"; // Удаление фона
    deleteButton.style.cursor = "pointer"; // Изменение курсора на указатель
    deleteButton.onclick = function() {
        contactsContainer.removeChild(contactBlock); //Здесь назначается функция, которая будет вызываться при клике на кнопку. Она удаляет contactBlock (предположительно, блок с информацией о контакте) из родительского элемента contactsContainer, тем самым удаляя контакт из отображения.
    };
    

    contactBlock.appendChild(logoImg);
    contactBlock.appendChild(nameDiv);
    contactBlock.appendChild(phoneDiv);
    contactBlock.appendChild(favoriteCheckbox);
    contactBlock.appendChild(deleteButton);
//В эти строки кода добавляются различные элементы (логотип, имя, телефон, чекбокс "избранное" и кнопка удаления) в блок контакта (contactBlock).
    contactsContainer.appendChild(contactBlock); //  добавление созданного блока контакта (contactBlock) в общий контейнер (contactsContainer), где,  отображаются все контакты.
}

document.getElementById("search").onkeyup = function() { //Для элемента с идентификатором search устанавливается обработчик события onkeyup. 
    const searchValue = this.value.toLowerCase(); //Внутри функции получаем текущее значение поля ввода (this.value) и конвертируем его в нижний регистр с помощью toLowerCase().
    const contactBlocks = document.querySelectorAll(".contact-block"); //С помощью document.querySelectorAll(".contact-block") выбираются все элементы на странице с классом contact-block.

    contactBlocks.forEach(block => { //С помощью метода forEach осуществляется перебор каждого контактного блока. Для каждого блока:
        const phone = block.querySelector("div:nth-child(3)").innerText.toLowerCase(); //Извлекается текст, содержащийся в третьем дочернем элементе блока (div:nth-child(3)) и также преобразуется в нижний регистр.
        block.style.display = phone.includes(searchValue) ? "" : "none"; //Затем проверяется, содержится ли значение, введенное в поле поиска (searchValue), в извлеченном телефоне.
    });//Если телефон содержит значение поиска, стиль отображения блока устанавливается в "" (по умолчанию), что означает, что блок будет видим. В противном случае стиль display устанавливается в "none", и блок будет скрыт.
}

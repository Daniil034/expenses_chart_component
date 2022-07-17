const maxMoneyAmount = (jsonFile) => {
    let maxAmount = 0;
    jsonFile.forEach(j => {
        if (j.amount > maxAmount) {
            maxAmount = j.amount;
        }
    })
    return maxAmount;
}

const visualizeColumns = (columns, jsonFile, maxAmount) => {
    columns.forEach(i => {
        jsonFile.forEach(j => {
            if (i.querySelector('.chart__day').innerHTML === j.day) {
                i.querySelector('.chart__visualization-column').style.height = j.amount / maxAmount * 100 + '%';
            }
        });
    })
}

const highlightDate = (columns) => {
    let currentDate = new Date();
    currentDate = currentDate.toString();
    const splittedDate = currentDate.split(' ')
    columns.forEach(item => {
        if (item.querySelector('.chart__day').innerHTML === splittedDate[0].toLowerCase()) {
            item.querySelector('.chart__visualization-column').classList.add('chart__visualization-column--active');
        }
    })
}

const showSpentMoney = (event, jsonFile) => {
    const targetEvent = event.target;
    const moneyElement = targetEvent.querySelector('.chart__visualization-spent');
    moneyElement.style.display = 'block';
    jsonFile.forEach(data => {
        if (targetEvent.parentNode.nextElementSibling.innerHTML === data.day) {
            moneyElement.innerHTML = '$' + data.amount;
        }
    })
}

const hideSpentMoney = (event) => {
    const targetEvent = event.target;
    const moneyElement = targetEvent.querySelector('.chart__visualization-spent');
    moneyElement.style.display = 'none';
}

export { maxMoneyAmount, visualizeColumns, highlightDate, showSpentMoney, hideSpentMoney };
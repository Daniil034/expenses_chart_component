import data from './data.json' assert {type: 'json'};
import { maxMoneyAmount, visualizeColumns, highlightDate, showSpentMoney, hideSpentMoney } from './functions.js';

const chartItems = document.querySelectorAll('.chart__item');
let maxAmount = maxMoneyAmount(data);

visualizeColumns(chartItems, data, maxAmount);

highlightDate(chartItems);

chartItems.forEach(item => {
    item.querySelector('.chart__visualization-column').addEventListener('mouseover', () => {
        showSpentMoney(event, data)
    });
})

chartItems.forEach(item => {
    item.querySelector('.chart__visualization-column').addEventListener('mouseout', () => {
        hideSpentMoney(event);
    })
})
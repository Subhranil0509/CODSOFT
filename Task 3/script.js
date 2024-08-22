document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.calculator button');
    
    let displayValue = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const action = button.getAttribute('data-action');
            const value = button.value;

            if (action === 'clear') {
                displayValue = '';
            } else if (action === 'delete') {
                displayValue = displayValue.slice(0, -1);
            } else if (action === 'calculate') {
                try {
                    displayValue = eval(displayValue) || '';
                } catch {
                    displayValue = 'Error';
                }
            } else if (action === 'operator') {
                displayValue += value;
            } else if (action === 'dot') {
                const lastNumber = displayValue.split(/[\+\-\*\/]/).pop();
                if (!lastNumber.includes('.')) {
                    displayValue += '.';
                }
            } else {
                displayValue += value;
            }

            display.value = displayValue;
        });
    });
});

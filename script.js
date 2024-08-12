const commandInput = document.getElementById('commandInput');
const output = document.getElementById('output');
const suggestionsBox = document.getElementById('suggestions');

const commands = [
    'open e-commerce-site',
    'open weather-app',
    'open blog-platform',
    'clear'
];

commandInput.addEventListener('input', function () {
    const input = commandInput.value.trim();
    suggestionsBox.innerHTML = '';
    if (input.startsWith('open')) {
        const filteredCommands = commands.filter(cmd => cmd.startsWith(input));
        filteredCommands.forEach(cmd => {
            const suggestionItem = document.createElement('div');
            suggestionItem.className = 'suggestion-item text-green-400';
            suggestionItem.textContent = cmd;
            suggestionItem.onclick = () => {
                commandInput.value = cmd; // Set the input value to the clicked suggestion
                suggestionsBox.innerHTML = ''; // Clear suggestions
                suggestionsBox.classList.add('hidden'); // Hide suggestions
            };
            suggestionsBox.appendChild(suggestionItem);
        });
        if (filteredCommands.length > 0) {
            suggestionsBox.classList.remove('hidden'); // Show suggestions if there are any
        } else {
            suggestionsBox.classList.add('hidden'); // Hide if no suggestions
        }
    } else {
        suggestionsBox.classList.add('hidden'); // Hide suggestions if not starting with 'open'
    }
});

commandInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const command = commandInput.value.trim();
        commandInput.value = '';
        handleCommand(command);
        suggestionsBox.innerHTML = ''; // Clear suggestions on command execution
        suggestionsBox.classList.add('hidden'); // Hide suggestions
    }
});

function handleCommand(command) {
    let response = '';
    switch (command) {
        case 'open e-commerce-site':
            response = 'Opening e-commerce-site.html...';
            window.open('e-commerce-site.html', '_blank');
            break;
        case 'open weather-app':
            response = 'Opening weather-app.js...';
            window.open('weather-app.js', '_blank');
            break;
        case 'open blog-platform':
            response = 'Opening blog-platform.php...';
            window.open('blog-platform.php', '_blank');
            break;
        case 'clear':
            output.innerHTML = ''; // Clear the output
            return; // Exit the function to avoid adding a response
        default:
            response = 'Command not found: ' + command;
    }
    output.innerHTML += `<p class="text-green-400">${response}</p>`;
}
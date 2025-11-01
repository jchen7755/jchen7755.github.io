// Helper function to escape HTML characters
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function generateHTML() {
    // Get form values
    const name = document.getElementById('name').value;
    const mascot = document.getElementById('mascot').value;
    const imageInput = document.getElementById('image');
    const caption = document.getElementById('caption').value;
    const personal = document.getElementById('personal').value;
    const professional = document.getElementById('professional').value;
    const academic = document.getElementById('academic').value;
    const webdev = document.getElementById('webdev').value;
    const platform = document.getElementById('platform').value;
    const funny = document.getElementById('funny').value;
    const anything = document.getElementById('anything').value;

    // Get all courses
    const courseInputs = document.querySelectorAll('input[name="course"]');
    const courses = Array.from(courseInputs).map(function(input) {
        return input.value;
    }).filter(function(val) {
        return val.trim() !== '';
    });

    // Get image data
    let imageSrc = 'images/placeholder.jpg';
    if (imageInput.files && imageInput.files[0]) {
        imageSrc = 'images/' + imageInput.files[0].name;
    }

    // Build courses list HTML
    let coursesHTML = '';
    courses.forEach(function(course) {
        coursesHTML += '        <li>' + course + '</li>\n';
    });

    // Create HTML string
    const htmlString = '<section>\n' +
        '    <h2>' + name + ' || ' + mascot + '</h2>\n' +
        '    <figure>\n' +
        '        <a href="' + imageSrc + '">\n' +
        '            <img src="' + imageSrc + '" alt="' + caption + '" />\n' +
        '        </a>\n' +
        '        <figcaption>' + caption + '</figcaption>\n' +
        '    </figure>\n' +
        '    <ul>\n' +
        '        <li><strong>Personal Background:</strong> ' + personal + '</li>\n' +
        '        <li><strong>Professional Background:</strong> ' + professional + '</li>\n' +
        '        <li><strong>Academic Background:</strong> ' + academic + '</li>\n' +
        '        <li><strong>Background in Web Development:</strong> ' + webdev + '</li>\n' +
        '        <li><strong>Primary Computer Platform:</strong> ' + platform + '</li>\n' +
        '        <li>\n' +
        '            <strong>Courses I\'m Taking:</strong>\n' +
        '            <ul>\n' +
        coursesHTML +
        '            </ul>\n' +
        '        </li>' +
        (funny ? '\n        <li><strong>Funny Thing:</strong> ' + funny + '</li>' : '') +
        (anything ? '\n        <li><strong>Anything Else:</strong> ' + anything + '</li>' : '') + '\n' +
        '    </ul>\n' +
        '</section>';

    // Change H2 text
    const h2 = document.querySelector('h2');
    h2.textContent = 'Introduction HTML';

    // Create the HTML display with syntax highlighting
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/default.min.css">' +
        '<section>' +
        '    <pre><code class="language-html">' + escapeHtml(htmlString) + '</code></pre>' +
        '</section>';

    // Load and apply highlight.js
    if (!window.hljs) {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js';
        script.onload = function() {
            window.hljs.highlightAll();
        };
        document.head.appendChild(script);
    } else {
        window.hljs.highlightAll();
    }

    // Hide the form
    document.getElementById('formSection').style.display = 'none';
}
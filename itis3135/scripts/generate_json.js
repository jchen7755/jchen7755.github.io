// Helper function to escape HTML characters - MOVED TO TOP
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function generateJSON() {
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

    // Get all courses - FIXED: Added parentheses around arrow function parameter
    const courseInputs = document.querySelectorAll('input[name="course"]');
    const courses = Array.from(courseInputs).map((input) => input.value).filter((val) => val.trim() !== '');

    // Get image data
    let imageData = '';
    if (imageInput.files && imageInput.files[0]) {
        imageData = imageInput.files[0].name;
    }

    // Create JSON object matching the example structure
    const jsonData = {
        "name": name,
        "mascot": mascot,
        "image": imageData,
        "caption": caption,
        "personal_background": personal,
        "professional_background": professional,
        "academic_background": academic,
        "background_web_development": webdev,
        "primary_computer_platform": platform,
        "courses": courses,
        "funny_thing": funny,
        "anything_else": anything
    };

    // Convert to formatted JSON string
    const jsonString = JSON.stringify(jsonData, null, 2);

    // Change H2 text
    const h2 = document.querySelector('h2');
    h2.textContent = 'Introduction JSON';

    // Create the JSON display with syntax highlighting
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/default.min.css">
        <section>
            <pre><code class="language-json">${escapeHtml(jsonString)}</code></pre>
        </section>
    `;

    // Load and apply highlight.js
    if (!window.hljs) {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js';
        script.onload = function() {
            hljs.highlightAll();
        };
        document.head.appendChild(script);
    } else {
        hljs.highlightAll();
    }

    // Hide the form
    document.getElementById('formSection').style.display = 'none';
}
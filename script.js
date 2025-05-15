const form = document.getElementById('grievance-form');
const formBox = document.getElementById("form-box");

form.addEventListener('submit', e => {
  e.preventDefault();
  const data = {
    title: document.getElementById('title').value,
    description: document.getElementById('description').value,
    mood: form.mood.value,
    severity: form.severity.value,
    response: form.response.value,  // Add this line
    otherResponse: document.querySelector('input[name="otherResponse"]').value, // Add this line
    timestamp: new Date().toLocaleString()
  };
  fetch('https://script.google.com/macros/s/AKfycbxh_gqKTDxaGPPvkRdmVos0saQ95QMUP8LAhyQj_ONvKk_7TntNlUmycmHBmQ5LuW4l2Q/exec', {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(() => {
    document.body.classList.add("thankyou-mode");
    formBox.innerHTML = `
      <div id="thank-you-message">
        <div class="heart-sparkle"></div>
        <div class="heart-sparkle" style="top: 50px; left: 80%;"></div>
        <div class="heart-sparkle" style="top: 80%; left: 40%;"></div>
        <h2>💖 Thank you for sharing, my love.</h2>
        <p>I promise to listen, understand, and grow with you.</p>
      </div>
    `;
    document.getElementById("thank-you-message").style.display = 'block';
  });
});

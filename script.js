const webhookURL = 'https://hook.us2.make.com/rehzsxqcj94qpz4awp516qh9q7ms77vn'; // ✅ Replace with your real Make.com link

async function generateImage() {
  const prompt = document.getElementById('prompt').value;
  if (!prompt) return alert('Please enter a prompt.');

  try {
    const response = await fetch(webhookURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });

    const data = await response.json();

    const imageUrl = data.image_url;
    const resultDiv = document.getElementById('result');
    const image = document.getElementById('ai-image');
    const download = document.getElementById('download');

    image.src = imageUrl;
    download.href = imageUrl;
    resultDiv.classList.remove('hidden');
  } catch (error) {
    alert("Failed to generate image. Please try again.");
    console.error(error);
  }
}

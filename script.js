function getChuckNorrisFact() {
    const apiUrl = 'https://api.chucknorris.io/jokes/random';
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const fact = data.value;
        const factElement = document.getElementById('fact');
        factElement.textContent = fact;
      })
      .catch(error => {
        console.error('Ocurrió un error:', error);
      });
  }
  
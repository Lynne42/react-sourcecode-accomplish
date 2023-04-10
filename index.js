

console.log("page is fully loaded");

const getHtml = (url, callback) => {
  fetch(url, {
    headers: {
      'Content-Type': 'text/html',
    }
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response;
  })
  .then(response => response.text())
  .then((response) => {
    callback(response)
  });
}

const root = document.getElementById('init-root');
root.addEventListener('click', function (e) {
  console.log(1, e.target.dataset.src);
  const url = e.target.dataset.src;
  const container = document.getElementById('container');
  container.innerHTML = `<object type="text/html" data="hooks/useState/index.html" width="100%" height="100%">44444</object>`

  getHtml(url, (data) => {
    console.log(1, data)
    window.location.replace(data)
  })
  
});
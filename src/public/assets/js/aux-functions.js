function postData(url = '', data = {}) {
  return fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'include', // need for cookies to pass
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrer: 'no-referer',
    body: JSON.stringify(data),
  }).then((response) => response.json());
}

function signIn() {
  const body = {
    // Sacos la info del la form del html
    email: document.forms[0].elements[0].value,
    password: document.forms[0].elements[1].value,
  };
  console.log(body);
  postData('login', body)
    .then((response) => {
      if (response.status !== '200') throw new Error(response.error);
      window.location.replace('/growbox.html');
    })
    .catch((error) => {
      window.alert(error.message);
      window.location.replace('/index.html');
    });
}

function signUp() {
  const body = {
    // Sacos la info del la form del html
    email: document.forms[0].elements[0].value,
    password: document.forms[0].elements[1].value,
    username: document.forms[0].elements[2].value,
  };
  postData('signup', body)
    .then((response) => {
      if (response.status !== '200') throw new Error(response.error);
      window.alert('account created!');
      window.location.replace('/index.html');
    })
    .catch((error) => {
      window.alert(error.message);
      window.location.replace('/signup.html');
    });
}

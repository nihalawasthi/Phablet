const hash = () => {
    const keys = getKeys();
    if (!keys) {
        alert("Log in First");
        return;
    }

    const plaintext = document.getElementById("data").value;
    const outtype = document.getElementById("outtype").value;
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        data: plaintext,
        keys: keys
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch("http://127.0.0.1:8000/api/M1/hash", requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(result => {
            const output = result.hashed_data[outtype];
            document.getElementById("result").value = output;
        })
        .catch(error => {
            console.error("Error:", error);
        });
};


    
const decrypt = () => {
    if (!keys) {
        alert("Log in First")
    }
    const encrypteddata = document.getElementById("encryptedtext").value;
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        encrypted_data: encrypteddata,
        keys: keys
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch("http://127.0.0.1:8000/api/M2/decrypt/", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            document.getElementById("decryptedOutput").value = result.decrypted_data;
        })
        .catch((error) => console.error(error));
};

const encrypt = () => {
    if (!keys) {
        alert("Log in First")
    }
    const plaintext = document.getElementById("plaintext").value;
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        data: plaintext,
        keys: keys
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch("http://127.0.0.1:8000/api/M2/encrypt/", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            document.getElementById("encryptedOutput").value = result.encrypted_data;
        })
        .catch((error) => console.error(error));
};

const login = () => {
    if (keys) {
        alert("Already Logged in")
    }
    const username = document.getElementById("username").value; // Updated to match input ID
    const password = document.getElementById("password").value; // Updated to match input ID
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "username": username,
        "password": password
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch("http://127.0.0.1:8000/api/login/", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            if (result.keys) {
                sessionStorage.setItem("keys", JSON.stringify(result.keys));
                window.location.href = "/";
            }

        })
        .catch((error) => console.error(error));
};

const signup = () => {
    const username = document.getElementById("signupUsername").value;
    const password = document.getElementById("signupPassword").value;
    const email = document.getElementById("signupEmail").value;
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "username": username,
        "password": password,
        "email": email
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch("http://127.0.0.1:8000/api/signup/", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            window.location.href = "#login";
        })
        .catch((error) => console.error(error));
};    

const getKeys = () => {
    const keys = sessionStorage.getItem("keys");
    return keys ? JSON.parse(keys) : null;
};
const keys = getKeys();
if (keys) {
    console.log("keys fetched successfull "); 
}
const logout = () => {
    sessionStorage.removeItem("keys");
};

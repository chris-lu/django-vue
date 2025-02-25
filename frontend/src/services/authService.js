import Cookies from "universal-cookie"

const cookies = new Cookies()


const fetchData = async (url, method = "GET", body = null) => {
    const options = {
        method,
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": cookies.get("csrftoken"),
        },
        credentials: "same-origin",
    }

    if (body) {
        options.body = JSON.stringify(body)
    }

    const response = await fetch(url, options)
    return response.json()
}

export const logoutView = async (router) => {
    try {
        const data = await fetchData("/api/logout/", "POST");
        console.log('logoutView', data)
        router.push({ name: 'Login' })
    } catch (err) {
        // console.log(err);
    }
}

export const whoamiView = async (name) => {
    try {
        const data = await fetchData("/api/whoami/");
        console.log('whoamiView', data);
        name.value = data.username
    } catch (err) {
        console.log(err);
    }
}

export const loginView = async (formData, router) => {
    try {
        const data = await fetchData("/api/login/", "POST", formData)
        if (data.detail === 'Successfully logged in.') {
            router.push({ name: 'Home' })
        }
        console.log('loginView', data)
    } catch (err) {
        // console.error(err);
    }
}

export const sessionView = async (router, redirect = false) => {
    try {
        const data = await fetchData("/api/session/")

        if (data.isAuthenticated && redirect) {
            router.push({ name: 'Home' })
        }
        console.log(sessionView, data);
    } catch (err) {
        // console.log(err);
    }
}

export const isAuthenticated = async () => {
    try {
        const data = await fetchData("/api/session/")
        return data && data.isAuthenticated;
    } catch (err) {
        return false;
    }
}
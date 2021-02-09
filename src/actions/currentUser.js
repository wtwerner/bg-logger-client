// Synchronous Action Creators

export const setCurrentUser = user => {
    return {
      type: "SET_CURRENT_USER",
      user
    }
}

// Asynchronous Action Creators

export const login = (credentials) => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/login", {
            credentials: 'include',
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
          .then(response => response.json())
          .then(response => {
            if (response.error) {
              alert(response.error)
            } else {
              dispatch(setCurrentUser(response))
            }
        })
          .catch(console.log)
    }
}

export const getCurrentUser = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/get_current_user", {
      credentials: 'include',
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(setCurrentUser(response))
        }
      })
      .catch(console.log)
  }
}
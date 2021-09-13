import axios from 'axios'
import React, { useEffect, useState } from 'react'

function AutoComplete() {
    const [user, setUser] = useState([])
    const [text, setText] = useState('')
    const [suggestions, setSuggestions] = useState([])

    useEffect(() => {
        const loadUsers = async () => {
            const response = await axios.get('https://reqres.in/api/users')
            setUser(response.data.data);
        }
        loadUsers();
    }, [])
    const onChangeHandler = (text) => {
        let matches = [];
        if (text.length > 0) {
            matches = user.filter(usr => {
                const regex = new RegExp(`${text}`, "gi");
                return usr.email.match(regex);
            })
        }
        setSuggestions(matches)
        setText(text)
    }
    const onSuggestionClickHandler = (text) => {
        setSuggestions([])
        setText(text)
    }
    return (
        <div className="container">
            <input className="col-md-12" style={{ marginTop: '20px' }} type="text" onChange={e => onChangeHandler(e.target.value)} value={text} onBlur={
                () => {
                    setTimeout(() => {
                        setSuggestions([]);
                    }, 100);
                }
            } />
            {suggestions && suggestions.map((suggestion, i) => {
                return <div key={i} className="suggestions col-md-12 justift-content-md-center" onClick={onSuggestionClickHandler(suggestion.email)}>{suggestion.email}</div>
            })}
        </div>
    )
}

export default AutoComplete

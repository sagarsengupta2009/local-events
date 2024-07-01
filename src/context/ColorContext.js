import { createContext, useState, useEffect } from 'react';

const dbServerPort = 'http://localhost:5000';
const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(true);
    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
        fetchFeedback();
    }, [])


    const [feedbackEdit, setFeedbackEdit] = useState(
        {
            item: {},
            edit: false
        }
    )



    //Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    return <FeedbackContext.Provider value={{
        feedback,
        isLoading,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;
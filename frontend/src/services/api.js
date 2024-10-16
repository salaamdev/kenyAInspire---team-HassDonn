import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const sendMessageToAI = async (token, message) => {
    const response = await axios.post(
        `${ API_URL }/chatbot`,
        {message},
        {
            headers: {Authorization: `Bearer ${ token }`},
        }
    );
    return response.data;
};

export const getOverallProgress = async (token) => {
    const response = await axios.get(`${ API_URL }/progress/overall`, {
        headers: {Authorization: `Bearer ${ token }`},
    });
    return response.data;
};


export const getCourseDetail = async (token, courseId) => {
    const response = await axios.get(
        `${ API_URL }/courses/${ courseId }`,
        {
            headers: {Authorization: `Bearer ${ token }`},
        }
    );
    return response.data;
};

export const updateTopicCompletion = async (token, courseId, topicId, isCompleted) => {
    const response = await axios.put(
        `${ API_URL }/progress/courses/${ courseId }/topics/${ topicId }`,
        {isCompleted},
        {
            headers: {Authorization: `Bearer ${ token }`},
        }
    );
    return response.data;
};

export const getFlashcards = async (token, courseId) => {
    const response = await axios.get(`${ API_URL }/flashcards/${ courseId }`, {
        headers: {Authorization: `Bearer ${ token }`},
    });
    return response.data;
};

export const getQuiz = async (token, courseId) => {
    const response = await axios.get(`${ API_URL }/quizzes/${ courseId }`, {
        headers: {Authorization: `Bearer ${ token }`},
    });
    return response.data;
};
// ............................ check here
export const loginUser = async (userData) => {
    const response = await axios.post(`${ API_URL }/auth/login`, userData);
    return response.data;
};

export const registerUser = async (userData) => {
    const response = await axios.post(`${ API_URL }/auth/register`, userData);
    return response.data;
};

export const getCourses = async (token) => {
    const response = await axios.get(`${ API_URL }/courses`, {
        headers: {
            Authorization: `Bearer ${ token }`,
        },
    });
    return response.data;
};

export const getProgress = async (token) => {
    const response = await axios.get(`${ API_URL }/progress`, {
        headers: {Authorization: `Bearer ${ token }`},
    });
    return response.data;
};

export const getAnnouncements = async () => {
    const response = await axios.get(`${ API_URL }/announcements`);
    return response.data;
};

export const getEvents = async () => {
    const response = await axios.get(`${ API_URL }/events`);
    return response.data;
};

export const getRecommendations = async (token) => {
    const response = await axios.get(`${ API_URL }/recommendations`, {
        headers: {Authorization: `Bearer ${ token }`},
    });
    return response.data;
};

export const updateProfile = async (token, userData) => {
    const response = await axios.put(
        `${ API_URL }/users/profile`,
        userData,
        {
            headers: {Authorization: `Bearer ${ token }`},
        }
    );
    return response.data;
};


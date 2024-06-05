export const isAuthenticated = () => {
    const token = localStorage.getItem('authToken');
    if (token) {
        try {
            const payload = JSON.parse(atob(token.split('.')[1]));
            const isExpired = payload.exp * 1000 < Date.now();
            return !isExpired;
        } catch (e) {
            return false;
        }
    }
    return false;
};
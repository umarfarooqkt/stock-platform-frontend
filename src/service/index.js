// eslint-disable-next-line import/prefer-default-export
export const getBackEndURL = () => process.env.REACT_APP_BACKEND_URL;

export const getLoginURL = () => process.env.REACT_APP_LOGIN_URL;

export const gotoLoginPage = () => {
    window.location.href = getLoginURL();
};

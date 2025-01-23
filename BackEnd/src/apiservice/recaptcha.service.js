const axios = require('axios');

const verifyRecaptcha = async (token) => {
  const secretKey = '6LcjVcEqAAAAAOFUO8BRT8uAszNm2BTvgtO1G57U'; 
  const url = `https://www.google.com/recaptcha/api/siteverify`;

  try {
    const response = await axios.post(url, null, {
      params: {
        secret: secretKey,
        response: token,
      },
    });

    const { success, score } = response.data;
    return success && score >= 0.5;
  } catch (error) {
    console.error('Error verificando reCAPTCHA:', error);
    return false;
  }
};

module.exports = { verifyRecaptcha };

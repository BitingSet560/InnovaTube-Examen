const axios = require('axios');

const verifyRecaptcha = async (req, res, next) => {
  const recaptchaToken = req.body.recaptchaToken; 
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!recaptchaToken) {
    return res.status(400).json({ error: 'Token de reCAPTCHA no proporcionado' });
  }

  try {
    const response = await axios.post(
      'https://www.google.com/recaptcha/api/siteverify',
      new URLSearchParams({
        secret: secretKey,
        response: recaptchaToken,
      })
    );

    const data = response.data;

    if (data.success && data.score >= 0.5) {
      // Token válido, continúa con la solicitud
      next();
    } else {
      return res.status(400).json({ error: 'Fallo en la validación de reCAPTCHA' });
    }
  } catch (error) {
    console.error('Error al verificar reCAPTCHA:', error);
    return res.status(500).json({ error: 'Error interno al verificar reCAPTCHA' });
  }
};

module.exports = { verifyRecaptcha };

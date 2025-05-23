import jwt from 'jsonwebtoken';

const generateToken = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '15d',
    });

    res.cookie('jwt', token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in milliseconds
        httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
        sameSite: 'strict', // Protects against CSRF attacks
        secure: process.env.NODE_ENV !== 'development', // Ensures the cookie is sent over HTTPS in production
    });
};

export default generateToken;

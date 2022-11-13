
import jwt from 'jsonwebtoken'
const payload = {
    "name": "Md Talib Ansari",
    "_id": "12hj98yu343",
    "email": "abc@email.com",
    "image": "https://example.com/image.png",
    "exp": 1664637650
}
const SECRET = '5850485048504ireiftriei34r0934i543irt4i034i0';
const token = jwt.sign(payload, SECRET)
console.log(token)
const decoded = jwt.decode(token);

console.log(decoded)

const badToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWJoaXNoZWsgTWlzaHJhIiwiX2lkIjoidTk4MjNqaW4yMzQiLCJlbWFpbCI6ImFiaGlzaGVrQGVtYWlsLmNvbSIsImltYWdlIjoiaHR0cHM6Ly9leGFtcGxlLmNvbS9pbWFnZS5wbmciLCJleHAiOjE2NjQ2Mzc2NTB9.zArnXk7RmP1B_DDeSI-A0HNOP4cLWaJjzwfvvcw87zI';

try {
    const info = jwt.decode(badToken)

    console.log(info)
    const decoded = jwt.verify(badToken, SECRET)

    console.log(decoded)
} catch(err) {
    console.error(err)
}

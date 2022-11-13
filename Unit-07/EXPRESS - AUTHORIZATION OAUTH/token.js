
import jwt from 'jsonwebtoken'
const payload = {
    "name": "Umakant Vashishtha",
    "_id": "12hj98yu343",
    "email": "abc@email.com",
    "image": "https://example.com/image.png",
    "exp": 1664637650
}
const SECRET = '23u4h98he9238neo23ije2093u4e2-30eri23-09rj203jer023h4e0239jr0-239';
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

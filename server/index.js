import 'dotenv/config'
import express from 'express'
import mysql from 'mysql2/promise'

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'db_portofolio',
  connectionLimit: 10,
})

const app = express()
app.use(express.json())

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.get('/api/messages', async (req, res, next) => {
  try {
    const [rows] = await pool.query('SELECT * FROM messages ORDER BY id DESC')
    res.json(rows)
  } catch (err) {
    next(err)
  }
})

app.post('/api/messages', async (req, res, next) => {
  const { name, email, message } = req.body
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'name, email, dan message wajib diisi' })
  }
  try {
    const [result] = await pool.query(
      'INSERT INTO messages (name, email, message) VALUES (?, ?, ?)',
      [name, email, message],
    )
    const [rows] = await pool.query('SELECT * FROM messages WHERE id = ?', [result.insertId])
    res.status(201).json(rows[0])
  } catch (err) {
    next(err)
  }
})

app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({ error: 'Terjadi kesalahan server' })
})

const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log(`Backend jalan di http://localhost:${port} (MySQL db_portofolio)`)
})
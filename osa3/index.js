const express = require('express')
const app = express()

app.use(express.json())

let persons = [
    {
      name: "Arto Hellas",
      number: "040-123456",
      id: 1
    },
    {
      name: "Annikki Tähti",
      number: "040-654321",
      id: 2
    },
    {
      name: "Hermann Pelle",
      number: "050-121212",
      id: 3
    },
    {
      name: "Heli Kopteri",
      number: "044-696969",
      id: 4
    },
    ]

app.get('/', (req, res) => {
  res.send('<h1>Please type /api/persons to url bar</h1>')
})

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

const generateId = () => {
  //100 000 different id's
  return Math.floor(Math.random() * Math.floor(100000))
}

app.post('/api/persons', (request, response) => {
  const body = request.body

  if (!body.name) {
    return response.status(400).json({ 
      error: 'name missing' 
    })
  }
  if (!body.number) {
    return response.status(400).json({ 
      error: 'number missing' 
    })
  }

  const person = {
    name: body.name,
    number: body.number,
    id: generateId(),
  }

  persons = persons.concat(person)

  response.json(person)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const note = persons.find(person => person.id === id)
    
    if (note) {
      response.json(note)
    } else {
      response.status(404).end()
    }
  })

  app.post('/api/persons', (request, response) => {
    const note = request.body
    console.log(note)
  
    response.json(note)
  })

  app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
  
    response.status(204).end()
  })
  

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
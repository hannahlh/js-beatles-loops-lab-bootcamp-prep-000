function theBeatlesPlay(musicians, instruments) {
  const arr = []

  for (let i = 0, l = musicians.length; i < l; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return arr
}

function johnLennonFacts(facts) {
  const shoutedFacts = []

  let i = 0
  while (i < facts.length) {
    shoutedFacts.push(`${facts[i]}!!!`)
    i++
  }

  return shoutedFacts
<<<<<<< HEAD
}

function iLoveTheBeatles(n) {
  const arr = []
  do {
    arr.push('I love the Beatles!')
    n++
  } while (n < 15)
  
  return arr
=======
>>>>>>> 19c68cf57e02bc497a247728fa2ad1dd1ad6354c
}
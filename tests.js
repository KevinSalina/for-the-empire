const expect = require('chai').expect
const { describe, it } = require('mocha')
const deliverStormTroopersEscapeScene = require('./index')

describe('StarWarsScene', () => {
  it('returns shots and lines for Luke, Leia, and Han\'s escape scene', () => {
    const rebels = [
      { name: 'Luke Skywalker', plotArmor: true },
      { name: 'Leia Organa', plotArmor: true },
      { name: 'Han Solo', plotArmor: true },
    ]

    const actualResult = deliverStormTroopersEscapeScene(rebels)
    const expectedResult = [
      'Look! Rebel scum!',
      'Look! Rebel scum!',
      'Look! Rebel scum!',
      'Oh no! They\'re getting away!',
      'Oh no! They\'re getting away!',
      'Oh no! They\'re getting away!',
      'pew',
      'pew',
      'pew',
      'pew'
    ]


    expect(actualResult).to.deep.equal(expectedResult)
  })

  it('returns only shots when the rebels include random extras', () => {
    const rebels = [
      { name: 'Chewbacca', plotArmor: true },
      { name: 'Some Rebel', plotArmor: false },
      { name: 'Another Anonymous Rebel', plotArmor: false },
    ]

    const actualResult = deliverStormTroopersEscapeScene(rebels)
    const expectedResult = [
      'Look! Rebel scum!',
      'Look! Rebel scum!',
      'Look! Rebel scum!',
      'Oh no! They\'re getting away!',
      'pew',
      'pew',
      'pew',
      'pew'
    ]

    expect(actualResult).to.deep.equal(expectedResult)
  })

  it('returns shots and lines for 3PO and Artoo\'s escape scene', () => {
    const rebels = [
      { name: 'R2D2', plotArmor: true },
      { name: 'C3PO', plotArmor: true },
    ]

    const actualResult = deliverStormTroopersEscapeScene(rebels)
    const expectedResult = [
      'Look! Rebel scum!',
      'Look! Rebel scum!',
      'Oh no! They\'re getting away!',
      'Oh no! They\'re getting away!',
      'pew',
      'pew',
      'pew',
      'pew'
    ]

    expect(actualResult).to.deep.equal(expectedResult)
  })

  it('returns only shots at nothing when there are no rebels', () => {
    const rebels = []

    const actualResult = deliverStormTroopersEscapeScene(rebels)
    const expectedResult = ['pew', 'pew', 'pew', 'pew']


    expect(actualResult).to.deep.equal(expectedResult)
  })
})

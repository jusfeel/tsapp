import * as supertest from 'supertest'
import app from './App'

describe('App', () => {
  it('root url works', () =>
    supertest(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200)
  )
})
/**
 * Created by championswimmer on 22/07/17.
 */
import { assert, expect, should } from 'chai'
import { MockStorage } from '..'

// @ts-ignore
const mockStorage = new MockStorage()

mockStorage.setItem('a', 1 as any)
mockStorage.setItem('b', '20')

describe('MockStorage', () => {
  it('setItem, getItem', () => {
    expect(mockStorage.getItem('a')).equal('1')
  })
  it('key', () => {
    expect(mockStorage.key(1)).to.equal('b')
  })
  it('removeItem, clear', () => {
    mockStorage.removeItem('b')
    expect(mockStorage.getItem('b')).to.be.an('undefined')
    mockStorage.clear()
    expect(mockStorage.length).to.equal(0)
  })
})

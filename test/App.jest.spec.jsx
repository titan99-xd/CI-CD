import React, { act } from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom' // Import this
import axiosMock from 'axios'
import '@testing-library/jest-dom'
import App from '../src/App'

jest.mock('axios')

describe('<App />', () => {
  it('fetches data', async () => {
    axiosMock.get.mockResolvedValueOnce(
      {
        data: {
          results: [{ url: 'https://pokeapi.co/api/v2/pokemon/1/', name: 'bulbasaur', id: 1 }]
        }
      }
    )
    await act(async () => {
      // Wrap App in MemoryRouter
      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      )
    })
    expect(axiosMock.get).toHaveBeenCalledTimes(1)
    expect(axiosMock.get).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/?limit=50')
  })

  it('shows error', async () => {
    axiosMock.get.mockRejectedValueOnce(new Error())
    await act(async () => {
      // Wrap App in MemoryRouter
      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      )
    })
    expect(screen.getByTestId('error')).toBeVisible()
  })
})
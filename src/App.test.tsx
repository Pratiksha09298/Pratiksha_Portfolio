import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { afterEach, describe, expect, it } from 'vitest'
import App from './App'

function renderPortfolio() {
  return render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  )
}

describe('portfolio', () => {
  afterEach(() => {
    document.documentElement.removeAttribute('data-theme')
    window.localStorage.clear()
  })

  it('renders the resume sections and key profile details', () => {
    renderPortfolio()

    expect(screen.getByText(/PRATIKSHA PATIL/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Technical skills' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Experience' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Projects' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Certifications' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Education' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Achievements' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /let's make/i })).toBeInTheDocument()
    expect(screen.getAllByText('pratikshap313@gmail.com')).toHaveLength(2)
    expect(screen.getByText('5.8 years')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Jump to Accident and Health Insurance Provider Web Application experience' }))
      .toHaveAttribute('href', '#experience-accident-health-insurance')
  })

  it('toggles between light and dark themes', () => {
    renderPortfolio()

    fireEvent.click(screen.getByRole('button', { name: 'Switch to dark theme' }))
    expect(document.documentElement).toHaveAttribute('data-theme', 'dark')
    expect(window.localStorage.getItem('pratiksha-portfolio-theme')).toBe('dark')

    fireEvent.click(screen.getByRole('button', { name: 'Switch to light theme' }))
    expect(document.documentElement).toHaveAttribute('data-theme', 'light')
  })

  it('shows the mobile navigation controls accessibly', () => {
    renderPortfolio()
    const menuButton = document.querySelector<HTMLButtonElement>('.menu-toggle')
    if (!menuButton) throw new Error('The mobile navigation button is missing.')

    fireEvent.click(menuButton)

    expect(menuButton).toHaveAttribute('aria-label', 'Close navigation menu')
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toHaveClass('is-open')
  })
})

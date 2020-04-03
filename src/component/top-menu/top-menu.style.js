import s from 'styled-components'
import { Link } from '@reach/router'

export const StyledNav = s.nav`
  display: flex;
  flex-wrap: wrap;
`

export const StyledLink = s(Link)`
  text-decoration: none;
  padding: 0.3rem 0.6rem;
  margin-right: 0.2rem;
  margin-bottom: 0.4rem;
  margin-top: 0.4rem;
  border-radius: 5px;
  border: 1px solid #d52027;
  color: black;
  display: inline-block;

  &[aria-current="page"] {
    background: #d52027;
    color: white;
  }
`

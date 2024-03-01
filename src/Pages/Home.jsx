import React from 'react'
import {survey} from '../Resources/survey'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div className='container'>
      <h1 className='mb-4'>Top survey's</h1>
      <div className='d-flex flex-wrap gap-3'>
      {
        survey.map(v=><Link className='links' to={`/survey/${v.id}`}> <div key={v.id} className='survey rounded shadow p-4 '> {v.name} </div></Link> )
      }
      </div>
    </div>
  )
}

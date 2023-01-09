import React from 'react'
import { useParams } from 'react-router-dom'
import CardItem from '../Main/CardItem.component'
import CardList from '../Main/CardList.component'
import { SimilarMovies } from '../SimilarMovies'

export const ActorMovies = ({data}) => {
  return (
    <div>
					<SimilarMovies param={`person`} path="movie_credits"/>
    </div>
  )
}

import React from 'react'
import { Table } from 'semantic-ui-react'

export default function Leader(props) {
  console.log(props)
  const { id, name, avatar, numAnswers, numQuestions, total } = props.data
  return (
    <Table.Row>
      <Table.Cell>{name}</Table.Cell>
      <Table.Cell>{numQuestions}</Table.Cell>
      <Table.Cell>{numAnswers}</Table.Cell>
      <Table.Cell>{total}</Table.Cell>
    </Table.Row>
  )
}

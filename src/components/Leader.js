import React from 'react'
import { Table } from 'semantic-ui-react'

export default function Leader(props) {
  console.log(props)
  const {  name, avatarURL, numAnswers, numQuestions, total } = props.data
  return (
    <Table.Row>
      <Table.Cell style={{verticalAlign: 'middle'}}><div style={{display: 'flex'}}><img src={avatarURL} alt={name} style={{width: '40px', height: '40px', borderRadius: '50%'}} /><p>{name}</p></div></Table.Cell>
      <Table.Cell>{numQuestions}</Table.Cell>
      <Table.Cell>{numAnswers}</Table.Cell>
      <Table.Cell>{total}</Table.Cell>
    </Table.Row>
  )
}
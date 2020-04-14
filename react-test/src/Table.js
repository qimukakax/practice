import React from 'react'
// import { render } from 'react-dom'

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Remove</th>
            </tr>
        </thead>
    )
}

const TableBody = props => {
    console.log(props)
    const rows = props.characterData.characters.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={() => props.removeCharacter(index)}>删除</button>
                </td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}

const Table = props => {
    const { characterData, removeCharacter } = props
    return (
        <table>
            <TableHeader />
            <TableBody characterData={characterData} removeCharacter={removeCharacter} />
        </table>
    )
}

export default Table
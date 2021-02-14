import React from 'react'
import { Table, Button } from 'react-bootstrap'

class OwnedTable extends React.Component {
    render() {
        return (
            <Table striped bordered hover className="pt-10">
                <thead>
                    <tr className="text-center">
                        <th>Image</th>
                        <th>Title</th>
                        <th>Rank</th>
                        <th>Players</th>
                        <th>Add a Session</th>
                        <th>View Sessions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.userGames.map(game => {
                            return (
                                <tr key={game.id} className="align-middle" >
                                    <td className="text-center"><img src={game.images.small} alt="game" /></td>
                                    <td className="text-center">{game.name}</td>
                                    <td className="text-center">{game.rank}</td>
                                    <td className="text-center">{game.min_players}-{game.max_players}</td>
                                    <td className="text-center"><Button>Add Session</Button></td>
                                    <td className="text-center"><Button>View Sessions</Button></td>
                                </tr>
                            )}
                    )}
                </tbody>
            </Table>
        )
    }   
}

export default OwnedTable
export function Scoreboard({ data }) {

    return (
        <table className="scoreboard">
            <thead>
                <tr><td>Scoreboard</td></tr>
            </thead>
            <tbody>
            {
            data.map((scoreboardItem, index) => (
                <tr key= { index }>
                    <td>
                        { scoreboardItem.name }
                    </td>
                    <td>
                        { scoreboardItem.value = null ? "0" : scoreboardItem.value    }
                    </td>
                </tr>
            ))
            }
        </tbody>
        </table>
    )
}
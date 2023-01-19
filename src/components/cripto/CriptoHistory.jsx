const CriptoHistory = ({history}) => {
    return(
        <table>
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        history.map(({date, priceUsd, time}) =>(
                            <tr key={time}>
                                <td>{new Date(date).toDateString()}</td>
                                <td>{parseFloat(priceUsd).toFixed(4)}</td>
                            </tr>
                        ))
                    }
                </tbody>
        </table>
    )
}

export default CriptoHistory
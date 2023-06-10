import { useParams } from "react-router-dom"

function AgentsDetail() {
    const { id } = useParams()

    return (
        <h1>Esta es la para l detalle de cada agente</h1>
    )
}

export default AgentsDetail
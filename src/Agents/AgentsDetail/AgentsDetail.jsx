import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Loader from "../../Loader/Loader"
import EndPoints from "../../EndPoints"
import "./AgentsDetail.css"

function AgentsDetail() {
    const [agent, setAgent] = useState()
    const { id } = useParams()

    useEffect(() => {
        fetch(`${EndPoints.agents}/${id}?language=es-ES`)
            .then(res => res.json())
            .then(data => setAgent(data.data))
            .catch(e => {
                console.log(e)
            })
    }, [])

    return (
        <main className="agent-detail">
            {agent ? (
                <>
                    <div className="agent-img">
                        <img src={agent.fullPortraitV2} alt={`${agent.displayName} - image`} />
                    </div>

                    <div className="agent-info">
                        <div className="name">
                            <h1>{agent.displayName}</h1>
                        </div>

                        <div className="description">
                            <p>{agent.description}</p>
                        </div>

                        <div className="abilities">
                            <div className="abilities-title">
                                <h4>Habilidades</h4>
                            </div>
                            <ul className="abilities-list">
                                {agent.abilities.map((ability, i) => {
                                    return <li key={i}><strong>{ability.displayName}:</strong> {ability.description}</li>
                                })}
                            </ul>
                        </div>

                        <div className="role">
                            <div className="role-title">
                                <h4>{agent.role.displayName}</h4>
                                <div className="role-img">
                                    <img src={agent.role.displayIcon} alt={`${agent.role.displayName} - icon`} />
                                </div>
                            </div>
                            <div className="role-description">
                                <p>{agent.role.description}</p>
                            </div>
                        </div>
                    </div>
                </>
            ) : <Loader />}

        </main>
    )
}

export default AgentsDetail
import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow 
                projectId='2ff78ffe-388e-474d-be7e-a4463c6ddaf8'
                username={props.user.username}
                secret={props.user.secret}
                style={{height:'100%'}}
            />
        </div>
    )
}

export default ChatsPage;
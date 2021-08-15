import { DeleteModalContainer } from './DeleteModal.styles'

interface DeleteModalProps {
    message: string
    deleteTask: () => void
}

export function DeleteModal({ message, deleteTask }: DeleteModalProps) {
    return (
        <DeleteModalContainer>
            <p>{message}</p>
            <div className='d-flex'>
                <button onClick={deleteTask}>Delete</button>
            </div>
        </DeleteModalContainer>
    )
}

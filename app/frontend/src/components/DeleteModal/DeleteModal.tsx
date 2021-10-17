import { motion } from 'framer-motion'
import { DeleteModalContainer } from './DeleteModal.styles'

interface DeleteModalProps {
    message: string
    deleteTask: () => void
}

export function DeleteModal({ message, deleteTask }: DeleteModalProps) {
    function deleteTaskAndStopPropogation(
        e: React.MouseEvent<HTMLButtonElement>,
    ) {
        e.stopPropagation()
        deleteTask()
    }

    return (
        <DeleteModalContainer
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            transition={{ duration: 0.2 }}
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0 }}
            >
                <p>{message}</p>
                <div className='d-flex'>
                    <button onClick={deleteTaskAndStopPropogation}>
                        Delete
                    </button>
                </div>
            </motion.div>
        </DeleteModalContainer>
    )
}

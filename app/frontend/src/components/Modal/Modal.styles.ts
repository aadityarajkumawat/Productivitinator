import { motion } from 'framer-motion'
import styled from 'styled-components'

export const ModalOverlay = styled(motion.div)`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    background-color: #000000ba;
`

import styled from 'styled-components'
import { motion } from 'framer-motion'

export const SubjectItemContainer = styled(motion.div)`
    width: 620px;
    padding: 10px 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #5c5c5c;
    border-radius: 3px;
    border: 1px solid #737373;
    box-shadow: 2px 2px 11px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    margin-bottom: 20px;

    .subject-name {
        font-size: 17px;
        margin-bottom: 10px;
    }

    .credits-and-instructor span {
        margin-right: 30px;
    }
`

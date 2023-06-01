import React, { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Typography } from 'antd'
import styles from './index.module.scss'
import { createQuestionApi } from '@/services/question'
const { Title, Paragraph } = Typography

const Home: FC = () => {
    const nav = useNavigate()

    const btnClick = () => {
        nav('/login')
    }

    useEffect(() => {
        async function createQuestion() {
            const res = await createQuestionApi()
            console.log(res)
        }
        
        createQuestion()
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.info}>

                <Title>问卷调查 | 在线投票</Title>

                <Paragraph>已累计创建问卷 100 份，发布问卷 90 份，收到答卷 980 份</Paragraph>

                <Button type='primary' onClick={() => btnClick()}>
                    开始使用
                </Button>
                
            </div>
        </div>
    )
}

export default Home
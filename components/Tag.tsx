import React from 'react'
import styles from '@/styles/Tag.module.css'

type Props = {
  skill: string
}

function Tag({ skill }: Props) {
  return <div className={styles.tag}>{skill}</div>
}

export default Tag

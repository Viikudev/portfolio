import React, { ReactNode } from 'react'
import styles from '@/styles/Section.module.css'

type Props = {
  title: string
  id: string
  children: ReactNode
}

function Section({ title, children, id }: Props) {
  return (
    <div className={styles.projectList} id={id}>
      <p className={styles.title}>{title}</p>
      {children}
    </div>
  )
}

export default Section

import React from 'react'
import styles from '@/styles/EducationCard.module.css'

type Props = {
  university: string
  degree: string
  duration: string
}

function EducationCard({ university, degree, duration }: Props) {
  return (
    <div className={styles.educationCard}>
      <h4 className={[styles.noMargin, styles.title].join(' ')}>
        {university}
      </h4>
      <p className={styles.noMargin}>
        <span className={styles.degree}>{degree}</span> | {duration}
      </p>
    </div>
  )
}

export default EducationCard

import React from 'react'
import Image from 'next/image'
import styles from '@/styles/ExperienceCard.module.css'
import Tag from './Tag'

type Props = {
  experience: string
  title: string
  company: string
  duration: string
  location: string
  description: string
  tags: string[]
}

function ExperienceCard({
  experience,
  title,
  company,
  duration,
  location,
  description,
  tags,
}: Props) {
  return (
    <li className={styles.experienceCard}>
      <Image
        className={styles.img}
        src={`/${experience}`}
        width={1607}
        height={852}
        alt='Preview image of ferrominera logo'
      />
      <div className={styles.info}>
        <div>
          <h4 className={[styles.noMargin, styles.title].join(' ')}>{title}</h4>
          <p className={styles.noMargin}>{company}</p>
          <p className={styles.noMargin}>{duration}</p>
          <p className={styles.noMargin}>{location}</p>
        </div>
        <p className={styles.noMargin}>{description}</p>
        <div className={styles.tags}>
          {tags && tags.map((tagItem) => <Tag key={tagItem} skill={tagItem} />)}
        </div>
      </div>
    </li>
  )
}

export default ExperienceCard

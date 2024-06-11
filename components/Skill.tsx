import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Skill.module.css'

type Props = {
  skill: string
  name: string
}

function Skills({ skill, name }: Props) {
  return (
    <li className={styles.skill}>
      <Image
        src={`/${skill}.svg`}
        width={25}
        height={25}
        alt={`${skill} logo`}
      />
      <p>{name}</p>
    </li>
  )
}

export default Skills

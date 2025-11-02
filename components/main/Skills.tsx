import React from 'react'
import SkillDataIcons from '../sub/SkillDataIcons'
import { Skill_data, Skill_data_2 } from '@/constants'
import SkillText from '../sub/SkillText'

const Skills = () => {
  return (
    <section 
    id='skills'
    className='flex flex-col items-center justify-center gap-5 h-full relative px-20 py-20 mt-5'>
        <SkillText />

        <div className='flex flex-row justify-around items-center flex-wrap mt-5 gap-7'>
          {
            Skill_data.map( (image, index) => (
              <SkillDataIcons
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
              > 
              </SkillDataIcons>
            ))
          }
        </div>
        <div className='flex flex-row justify-around items-center flex-wrap mt-5 gap-7'>
          {
            Skill_data_2.map( (image, index) => (
              <SkillDataIcons
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
              > 
              </SkillDataIcons>
            ))
          }
        </div>
    </section>
  )
}

export default Skills

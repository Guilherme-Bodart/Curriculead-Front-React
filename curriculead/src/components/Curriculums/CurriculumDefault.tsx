import React from 'react';
import { useAppSelector } from '../hooks'; // Ajuste o caminho conforme necessário
import { CurriculumStyleEnum } from '../enumerators/curriculumType.enum';
import './CurriculumDefault.scss'; // Importando o SCSS

const CurriculumDefault: React.FC = () => {
  const { user, curriculum } = useAppSelector((state: any) => ({
    user: state.user,
    curriculum: state.public, // Ajuste conforme necessário
  }));

  const currentPosition = curriculum.professionalExperience.find((pe) => pe.currentPosition);

  return (
    <div className="curriculum">
      <div className="header">
        <div className="name-profession">
          <span className="name">{user.name}</span>
          <span className="profession">{currentPosition?.employer}</span>
        </div>
        <div className="contact">
          <a href={user.github} className="no-underline font-bold">
            {user.github.split("//")[1]}
          </a>
          <a href={user.linkedin} className="no-underline font-bold">
            {user.linkedin.split("//")[1].split("www.")[1]}
          </a>
          <span className="email">{user.email}</span>
          <span className="phone">{user.phone}</span>
        </div>
      </div>
      <p className="divider" /> {/* Adicione uma estilização para o divider */}
      <div className="about-me">
        {curriculum.aboutMe}
      </div>
      <p className="divider" />
      <div className="flex flex-column">
        <div className="flex gap-5">
          <div className="flex flex-column w-6">
            <span className="name mb-2">Experiência</span>
            <div className="flex flex-column gap-1">
              {curriculum.professionalExperience.map((experience, index) => (
                <div key={index} className={index < curriculum.professionalExperience.length - 1 ? 'mb-3' : ''}>
                  <span className="title">{experience.employer}</span>
                  <span className="title">{experience.office}</span>
                  <span className="head">
                    {(experience.startDate).toLocaleDateString("pt-BR", { year: 'numeric', month: 'long', day: 'numeric' })} - 
                    {(experience.endDate ? new Date(experience.endDate).toLocaleDateString("pt-BR", { year: 'numeric', month: 'long', day: 'numeric' }) : 'Atual')}
                  </span>
                  <span className="head">{experience.responsibility}</span>
                  <span className="description">{experience.description}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-column w-6">
            <span className="name mb-2">Formação</span>
            <div className="flex flex-column gap-1">
              {curriculum.academicEducation.map((education, index) => (
                <div key={index} className={index < curriculum.academicEducation.length - 1 ? 'mb-3' : ''}>
                  <span className="title">{`${education.schoolName} - ${education.courseName}`}</span>
                  <span className="head">
                    {(education.startDate).toLocaleDateString("pt-BR", { year: 'numeric', month: 'long', day: 'numeric' })} - 
                    {(education.endDate ? new Date(education.endDate).toLocaleDateString("pt-BR", { year: 'numeric', month: 'long', day: 'numeric' }) : 'Atual')}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="divider" />

        <div className="flex justify-content-between">
          <div className="flex flex-column">
            <span className="name mb-3">Habilidades e Idiomas</span>
            <div className="flex flex-column gap-3 flex-wrap" style={{ maxHeight: '240px' }}>
              {curriculum.skill.map((skill, index) => (
                <div className="flex gap-3" key={index}>
                  <span>{skill.name}</span>
                  <p className="p-rating">
                    {/* Use seu componente de rating aqui */}
                    <span style={{ width: `${skill.level * 14.2857}%`, backgroundColor: 'var(--blue-500)' }} />
                  </p>
                </div>
              ))}
              {curriculum.language.map((language, index) => (
                <div className="flex gap-3" key={index}>
                  <span>{language.name}</span>
                  <p className="p-rating">
                    {/* Use seu componente de rating aqui */}
                    <span style={{ width: `${language.level * 14.2857}%`, backgroundColor: 'var(--blue-500)' }} />
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurriculumDefault;
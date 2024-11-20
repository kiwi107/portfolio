import React from 'react'
import './css/general.css'
import { useState } from 'react'
import SkillCard from '../Components/SkillCard'
import { Languages, Frameworks, TestingTools, Databases, DeveloperTools } from '../Data/skills.js';
import { useRef, useEffect } from 'react';


const Skills = () => {
    const [languages] = useState(Languages)
    const LanguageRef = useRef()
    const FrameworkRef = useRef()
    const DatabaseRef = useRef()
    const DeveloperToolsRef = useRef()
    const TestingToolsRef = useRef()



    useEffect(() => {
        LanguageRef.current.style.display = 'block'
        FrameworkRef.current.style.display = 'none'
        DatabaseRef.current.style.display = 'none'
        DeveloperToolsRef.current.style.display = 'none'
        TestingToolsRef.current.style.display = 'none'
    }, [])



    const handleVisibility = (text) => {
        LanguageRef.current.style.display = 'none'
        FrameworkRef.current.style.display = 'none'
        DatabaseRef.current.style.display = 'none'
        DeveloperToolsRef.current.style.display = 'none'
        TestingToolsRef.current.style.display = 'none'

        if (text === 'Languages') {
            LanguageRef.current.style.display = 'block'
        }
        if (text === 'Frameworks/Libraries') {
            FrameworkRef.current.style.display = 'block'
        }
        if (text === 'Databases') {
            DatabaseRef.current.style.display = 'block'
        }
        if (text === 'Developer Tools') {
            DeveloperToolsRef.current.style.display = 'block'
        }
        if (text === 'Testing Tools') {
            TestingToolsRef.current.style.display = 'block'
        }
    }


    const handleTabChange = (e) => {
        document.querySelectorAll('.nav-link').forEach((link) => {
            link.classList.remove('active')
        })
        e.target.classList.add('active')
        handleVisibility(e.target.innerText)
    }
    return (
        <div className='page'>

            <div style={{ height: '100vh' }}>



                <h1 className="title text-center pt-5">Skills</h1>
                <div className="d-flex justify-content-center">
                    <ul className="nav nav-underline d-flex justify-content-center flex-wrap">
                        <li className="nav-item">
                            <h6 className="nav-link custom-nav active" onClick={handleTabChange}>Languages</h6>
                        </li>
                        <li className="nav-item">
                            <h6 className="nav-link custom-nav" onClick={handleTabChange}>Frameworks/Libraries</h6>
                        </li>
                        <li className="nav-item">
                            <h6 className="nav-link custom-nav" onClick={handleTabChange}>Databases</h6>
                        </li>
                        <li className="nav-item">
                            <h6 className="nav-link custom-nav" onClick={handleTabChange}>Developer Tools</h6>
                        </li>
                        <li className="nav-item">
                            <h6 className="nav-link custom-nav" onClick={handleTabChange}>Testing Tools</h6>
                        </li>
                    </ul>
                </div>




                <div ref={LanguageRef} >
                    <div className='row d-flex justify-content-center'>
                        {languages.map((language, index) => (
                            <>
                                <SkillCard key={index} skill={language} />
                            </>

                        ))}
                    </div>

                </div>

                <div ref={FrameworkRef}>
                    <div className='row d-flex justify-content-center'>
                        {Frameworks.map((framework, index) => (
                            <>
                                <SkillCard key={index} skill={framework} />
                            </>

                        ))}
                    </div>

                </div>

                <div ref={DatabaseRef}>
                    <div className='row d-flex justify-content-center'>
                        {Databases.map((testingTool, index) => (
                            <>
                                <SkillCard key={index} skill={testingTool} />
                            </>

                        ))}
                    </div>

                </div>

                <div ref={DeveloperToolsRef}>
                    <div className='row d-flex justify-content-center'>
                        {DeveloperTools.map((testingTool, index) => (
                            <>
                                <SkillCard key={index} skill={testingTool} />
                            </>

                        ))}
                    </div>
                </div>
                <div ref={TestingToolsRef}>
                    <div className='row d-flex justify-content-center'>
                        {TestingTools.map((testingTool, index) => (
                            <>
                                <SkillCard key={index} skill={testingTool} />
                            </>

                        ))}
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Skills
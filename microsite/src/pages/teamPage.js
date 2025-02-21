import React from 'react';
import Layout from '@theme/Layout';
import './teamPage.css';

function TeamPage() {
    const members = [
        {
            name: 'Rodrigo Abreu',
            url: 'https://github.com/rodrigoabreu22',
            image_url: 'https://avatars.githubusercontent.com/u/119303263?s=400&u=c2868d24cfc281fee84c38cff09cb813be0420b1&v=4',
            mainRole: 'Developer',
        },
        {
            name: 'Eduardo Lopes',
            url: 'https://github.com/odraude23',
            image_url: 'https://avatars.githubusercontent.com/u/120457563?v=4',
            mainRole: 'Developer',
        },
        {
            name: 'Hugo Ribeiro',
            url: 'https://github.com/xHuGODx',
            image_url: 'https://avatars.githubusercontent.com/u/108608507?v=4',
            mainRole: 'Developer',
        },
        {
            name: 'João Neto',
            url: 'https://github.com/FunnyJoaoneto',
            image_url: 'https://avatars.githubusercontent.com/u/122064361?v=4',
            mainRole: 'Developer',
        },
        {
            name: 'Jorge Domingues',
            url: 'https://github.com/JorgeGuiDomingues',
            image_url: 'https://avatars.githubusercontent.com/u/131367612?v=4',
            mainRole: 'Developer',
        },
    ];

    const advisors = [
        {
            name: 'Rafael Teixeira',
            image_url: require('@site/static/img/rafael_teixeira.png').default,
            mainRole: 'Tutor',
        },
        {
            name: 'Rafael Direito',
            image_url: 'https://ca.slack-edge.com/T04CS13AB-U3BAN202J-ebd751d63db2-512',
            mainRole: 'Tutor',
        },
        {
            name: 'Rui Aguiar',
            image_url: require('@site/static/img/rui_aguiar.jpg').default,
            mainRole: 'Tutor',
        }   
    ]

    const renderMembers = () => {
        return members.map((member, index) => (
            <div key={index} className="member-card">
                <img src={member.image_url} alt={`${member.name}'s avatar`} className="member-avatar" />
                <h2 className="member-name">{member.name}</h2>
                <p className="member-role">{member.mainRole}</p>
                <a href={member.url} target="_blank" rel="noopener noreferrer" className="member-link">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                        alt="GitHub Icon"
                        className="github-icon"
                    />
                </a>
            </div>
        ));
    };
    
    const renderAdvisors = () => {
        return advisors.map((advisor, index) => (
            <div key={index} className="member-card">
                <img src={advisor.image_url} alt={`${advisor.name}'s avatar`} className="member-avatar" />
                <h2 className="member-name">{advisor.name}</h2>
                <p className="member-role">{advisor.mainRole}</p>
            </div>
        ));
    };
    
    return (
        <div className="container mx-auto py-16 px-6">
            <h1 className="section-title">Meet Our Team</h1>
            <div className="team-members">{renderMembers()}</div>
    
            <h1 className="section-title" style={{marginTop: '50px'}}>Tutors</h1>
            <div className="team-members">{renderAdvisors()}</div>
        </div>
    );
    
}

export default TeamPage;

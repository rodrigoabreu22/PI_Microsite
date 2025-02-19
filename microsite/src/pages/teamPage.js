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
            image_url: 'https://avatars.githubusercontent.com/u/122064361?v=4',
            mainRole: 'Developer',
        }
    ];

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

    return (
        <div className="container mx-auto py-10 px-5" style={{ marginTop: '30px', marginBottom: '30px' }}>
            <h1 className="text-3xl font-bold text-center mb-6 mt-10" style={{ marginBottom: '20px' }}>Our Team</h1>
            <div className="team-members">
                {renderMembers()}
            </div>
        </div>
    );
}

export default TeamPage;

import React from 'react';
import Layout from '@theme/Layout';

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

    return (
        <Layout title="Team">
            <div className="container mx-auto py-10 px-5">
                <h1 className="text-3xl font-bold text-center mb-6 mt-10">Our Team</h1>
                <div className="flex flex-wrap justify-center gap-6">
                    {members.map((member, index) => (
                        <div key={index} className="bg-white shadow-md rounded-lg p-5 flex flex-col items-center text-center w-64">
                            <img src={member.image_url} alt={member.name} className="w-24 h-24 rounded-full mb-4 border border-gray-200" />
                            <a href={member.url} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-blue-600 hover:underline">
                                {member.name}
                            </a>
                            <p className="text-gray-500 text-sm mt-2">{member.mainRole}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}

export default TeamPage;

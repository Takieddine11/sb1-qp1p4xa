import React from 'react';
import { motion } from 'framer-motion';

const team = [
  {
    name: 'Taki Kheloufi',
    role: 'CEO & Founder',
    image: 'https://media.licdn.com/dms/image/v2/D4E03AQH9bfoVU815HA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1695662369017?e=1738800000&v=beta&t=QX3QPELuGyFVS2wBIrveUj0lzwV8xCl9E3NCcbTcy6A',
    linkedin: 'https://www.linkedin.com/in/taki-kheloufi-psm-baa-pmp-%C2%AE-safe%C2%AE-50ab651a1/'
  },
  {
    name: 'Merouane Abed',
    role: 'Head of Partner Relations and Strategy',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQFk04jvFrvJ2g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1683299179965?e=1738800000&v=beta&t=U0uYhVss17xt0z2YzldO0UoPSKXBinWF28CoNeSdpvs',
    linkedin: 'https://www.linkedin.com/in/merouaneabed/'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Security Director',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Rym Ait Ouzegane',
    role: 'Business Developer',
    image: 'https://media.licdn.com/dms/image/v2/D4E03AQEi4n3AjzkNWg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1671905973898?e=1738800000&v=beta&t=56lh5kbYS0WLFcpBNTR5gxFMQzDaHyKnldRd9NJeMwU',
    linkedin: 'https://www.linkedin.com/in/rym-ait-ouzegane-9168a1195/'
  }
];

export function Team() {
  return (
    <div className="relative bg-[#02081d] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Our Leadership Team</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Meet the experienced professionals dedicated to revolutionizing corporate housing solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="relative mx-auto w-48 h-48 mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#cc73fB] to-purple-600 opacity-75 group-hover:opacity-100 transition-opacity duration-300" style={{ padding: '3px' }}>
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>
              {member.linkedin ? (
                <a 
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:text-[#cc73fB] transition-colors duration-300"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                </a>
              ) : (
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
              )}
              <p className="text-[#cc73fB]">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
import React from 'react'

const AboutUs = () => {
  return (
    <div>
        <div>
            <h1>About Us </h1>
            {aboutData.map((item, index) => (
  <div key={index}>
    <h2 className="text-2xl font-semibold">{item.title}</h2>
    <p className="text-gray-400 mt-2">{item.desc}</p>
  </div>
))}
        </div>
    </div>
  )
}

export default AboutUs
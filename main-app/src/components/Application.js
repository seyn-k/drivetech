import React from 'react';
import './Application.css';

import img1 from '../assets/arerial-work-platform.jpg';
import img2 from '../assets/paviing-machine.jpg';
import img3 from '../assets/carpenter-working-sawmill-wood-manufacture-scaled.jpg';
import img4 from '../assets/port-crane.jpg';
import img5 from '../assets/modular-vechicle.jpg';

const applications = [
  {
    title: 'Aerial Work Platform',
    description: 'Slew drives and slew bearings are essential components in Aerial Work Platforms (AWPs), providing smooth rotation and stability while elevating workers to height. They enable precise positioning of the platform, allowing for safe and efficient operation in various applications. Their robust design ensures reliability under heavy loads, enhancing safety and performance in aerial tasks',
    img: img1,
  },
  {
    title: 'Paving Machine',
    description: 'Slew drives and slew bearings in paving machines enable precise rotation and positioning of the machine’s parts, such as the conveyor and screed. They ensure smooth, controlled movement during the paving process, allowing for accurate material placement and improved efficiency. This enhances both performance and operational stability on job sites.',
    img: img2,
  },
  {
    title: 'Slew Drives for Welding Positioners',
    description: 'Slew drives provide the precise radial and axial movements essential for welding positioners. With exceptional horsepower, high rotational torque, and a durable design, slew drives can operate under heavy loads and require minimum maintenance. These reliable systems are ideal within a range of industries where welding positioners are crucial for operations.',
    img: img3,
  },
  {
    title: 'Port Crane',
    description: 'Our slew drive can be used for straight arm type marine crane, crank arm type marine crane, lifeboat crane davit arm rotating place. Our WEA series slewing drive has compact structure , can be used for port crane , it will save lots of space on deck. At the same time slewing bearing and worm composed of self-locking structure for the marine crane will have more insurance. High-performance protective paint and skeleton oil seal, even the long time in the sea operations, WEA series slewing drive is not affected. (Paint protection level in accordance with customer’s requirements.',
    img: img4,
  },
  {
    title: 'Modular Vehicle',
    description: 'Modular Vehicle has lots of features, such as high load, big torque,flexible steering, etc. These characteristics require the slew drive need to have high structural strength, high output torque with strong abrasive resistance. Our HSE double worm slewing drive is suitable for this application. Our gear material is brass, it will make torque output and adhesion wear resistance increase. The engine body material is high-quality carbon structural steel to ensure slewing drive’s structural strength, double motor drive makes the steering ability more strong, using slewing drive will reduce Modular Vehicle’s center of gravity to achieve drive more stable',
    img: img5,
  }
];

const Application = () => {
  return (
    <div className="application-page">
      <div className="application-header">
        <h1>Our Applications</h1>
        <p>
          Drive Tech Systems' products are integral to a wide range of applications,
          powering innovation and efficiency across various industries.
        </p>
      </div>
      <div className="application-list">
        {applications.map((app, index) => (
          <div className="application-item" key={index}>
            <div className="application-image">
              <img src={app.img} alt={app.title} />
            </div>
            <div className="application-content">
              <h2>{app.title}</h2>
              <p>{app.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Application;
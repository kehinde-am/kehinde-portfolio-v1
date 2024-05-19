// components/About.tsx

import Card from './Card';

const About = () => {
  return (
    <Card>
      <section id="about" className="py-20">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg">
          I am a passionate developer with experience in building modern web applications.
          I love creating interactive and visually appealing user experiences.
        </p>
      </section>
    </Card>
  );
};

export default About;

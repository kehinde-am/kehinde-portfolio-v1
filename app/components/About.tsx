import Link from 'next/link';
import Card from './Card';

const About = () => {
  return (
    <Card>
      <section id="about" className="py-10">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg">
          I am a passionate developer with experience in building modern web applications.
          I love creating interactive and visually appealing user experiences.
          <Link href="/resume.pdf" legacyBehavior>
            <a download className="bg-blue-800 text-white px-4 py-2 rounded">Download Resume</a>
          </Link>
        </p>
      </section>
    </Card>
  );
};

export default About;

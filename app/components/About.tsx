
import Link from 'next/link';
import ThreeDCard from './ThreeDCard';

const About = () => {
  return (
    <ThreeDCard>
      <section id="about" className="p-6">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg">
          I am a passionate developer with experience in building modern web applications.
          I love creating interactive and visually appealing user experiences.
        </p><br></br>
        <Link href="/resume.pdf" legacyBehavior>
              <a download className="bg-blue-800 text-white px-4 py-2 rounded">Download Resume</a>
            </Link>

      </section>
    </ThreeDCard>
  );
};

export default About;
